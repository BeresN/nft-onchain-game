"use client";
import { useState } from "react";
import { useWriteContract, useReadContract } from "wagmi";
import { useConfig } from "wagmi";
import { waitForTransactionReceipt } from "wagmi/actions";
import whitelistAbi from "../../../abis/whitelistAbi.json";
import { WHITELIST_ADDRESS } from "./contracts";
import { isAddress } from "viem";
import { useTheme } from "../providers";

export default function WhitelistButton() {
  const [isRecipientValid, setIsRecipientValid] = useState(false);
  const [recipientTouched, setRecipientTouched] = useState(false);
  const [recipientAddress, setRecipientAddress] = useState<string>();
  const [message, setMessage] = useState<string>("");
  const config = useConfig();
  const { isDark } = useTheme();

  const handleRecipientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log("Input value:", value);
    setRecipientAddress(value);
    setRecipientTouched(true);

    if (value && isAddress(value)) {
      console.log("Valid address:", value);
      setIsRecipientValid(true);
    } else {
      console.log("Invalid address:", value);
      setIsRecipientValid(false);
    }
  };

  const { data: hash, isPending, writeContractAsync } = useWriteContract();

  const { data: isWhitelisted } = useReadContract({
    address: WHITELIST_ADDRESS as `0x${string}`,
    abi: whitelistAbi,
    functionName: "isWhitelisted",
    args:
      recipientAddress && isAddress(recipientAddress)
        ? [recipientAddress as `0x${string}`]
        : undefined,
  });

  async function handleAddToWhitelist() {
    if (isWhitelisted) {
      setMessage("Address is already whitelisted!");
      return;
    }

    try {
      setMessage("Adding to whitelist...");
      const transactionHash = await writeContractAsync({
        address: WHITELIST_ADDRESS as `0x${string}`,
        abi: whitelistAbi,
        functionName: "addToWhitelist",
        args: [recipientAddress as `0x${string}`],
      });

      const transactionReceipt = await waitForTransactionReceipt(config, {
        hash: transactionHash,
      });

      setMessage("Address successfully added to whitelist!");
      console.log("Address added to whitelist:", transactionReceipt);
    } catch (err) {
      setMessage("Failed to add address to whitelist");
      console.log("failed adding to whitelist: ", err);
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Enter wallet address (0x...)"
          value={recipientAddress || ""}
          onChange={handleRecipientChange}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            isDark
              ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
          }`}
        />
      </div>
      {message && (
        <div
          className={`p-3 rounded-lg text-sm ${
            message.includes("successfully")
              ? "bg-green-100 text-green-800 border border-green-200"
              : message.includes("already whitelisted")
              ? "bg-yellow-100 text-yellow-800 border border-yellow-200"
              : message.includes("Failed")
              ? "bg-red-100 text-red-800 border border-red-200"
              : "bg-blue-100 text-blue-800 border border-blue-200"
          }`}
        >
          {message}
        </div>
      )}
      <button
        onClick={handleAddToWhitelist}
        disabled={!isRecipientValid || isPending}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending
          ? "Adding to Whitelist..."
          : isWhitelisted
          ? "Already Whitelisted"
          : "Add to Whitelist"}
      </button>
    </div>
  );
}
