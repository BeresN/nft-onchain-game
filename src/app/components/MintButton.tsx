"use client";
import { useState } from "react";
import { useWriteContract, useReadContract } from "wagmi";
import { useConfig } from "wagmi";
import { waitForTransactionReceipt } from "wagmi/actions";
import { getAccount } from "wagmi/actions";

import whitelistAbi from "../../../abis/whitelistAbi.json";
import nftAbi from "../../../abis/growthStagesAbi.json";

import { WHITELIST_ADDRESS, NFT_ADDRESS } from "./contracts";
import { isAddress } from "viem";
import { useTheme } from "../providers";

export default function MintButton() {
  const [message, setMessage] = useState<string>("");
  const [selectedTreeType, setSelectedTreeType] = useState<number | null>(null);
  const config = useConfig();
  const { isDark } = useTheme();
  const account = getAccount(config);
  const { data: hash, isPending, writeContractAsync } = useWriteContract();

  const { data: isWhitelisted } = useReadContract({
    address: WHITELIST_ADDRESS as `0x${string}`,
    abi: whitelistAbi,
    functionName: "isWhitelisted",
    args: account.address ? [account.address] : undefined,
  });

  const handleTreeTypeSelect = (index: number) => {
    setSelectedTreeType(index);
    console.log("the tree:", index);
  };

  async function handleMintNFT() {
    console.log("Current recipient address:", account.address);

    if (isWhitelisted) {
      try {
        setMessage("Minting...");
        const transactionHash = await writeContractAsync({
          address: NFT_ADDRESS as `0x${string}`,
          abi: nftAbi,
          functionName: "mint",
          args: [account.address as `0x${string}`, selectedTreeType],
          value: BigInt("1000000000000000"), // 0.001 ETH in wei
        });

        const transactionReceipt = await waitForTransactionReceipt(config, {
          hash: transactionHash,
        });

        setMessage("NFT was succesfully minted!");
        console.log("NFT Minted:", transactionReceipt);
      } catch (err) {
        setMessage("Failed to Mint");
        console.log("failed to mint: ", err);
      }
    } else {
      setMessage("Address is not whitelisted, cannot mint NFT");
    }
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {["Summer", "Winter", "Autumn"].map((treeType, index) => (
          <div
            key={treeType}
            onClick={() => handleTreeTypeSelect(index)}
            className={`border-2 rounded-lg p-6 cursor-pointer transition-all hover:shadow-lg ${
              selectedTreeType === index
                ? isDark
                  ? "border-green-500 bg-green-900"
                  : "border-green-500 bg-gray-50"
                : isDark
                ? "border-gray-600 bg-gray-700 hover:border-green-500"
                : "border-gray-200 bg-gray-50 hover:border-green-500"
            }`}
          >
            <div className="text-center">
              <div className="text-4xl mb-4">🌳</div>
              <h3
                className={`text-xl font-semibold mb-2 ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                {treeType} Tree
              </h3>
              <p
                className={`text-sm ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Starts as a seedling
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center">
        <div
          className={`text-center mb-6 ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          <p className="text-lg font-semibold mb-2">Mint Price: 0.001 ETH</p>
          <p className="text-sm">Connect your wallet to proceed</p>
        </div>
        <button
          onClick={handleMintNFT}
          disabled={
            selectedTreeType === null ||
            isPending ||
            account.status != "connected"
          }
          className={`px-8 py-3 rounded-lg font-medium transition-colors text-lg ${
            selectedTreeType === null ||
            isPending ||
            account.status != "connected"
              ? "bg-gray-400 text-gray-600 cursor-not-allowed"
              : "bg-green-600 text-white hover:bg-green-700"
          }`}
        >
          Mint Tree NFT
        </button>
        {message}
      </div>
    </div>
  );
}
