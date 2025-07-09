"use client";
import { useState } from "react";
import { useWriteContract, useReadContract } from "wagmi";
import { useConfig } from "wagmi";
import { waitForTransactionReceipt } from "wagmi/actions";
import { getAccount } from "wagmi/actions";

import nftAbi from "../../../abis/growthStagesAbi.json";

import { NFT_ADDRESS } from "./contracts";

interface WateringButtonProps {
  tokenId: string;
  onWateringComplete?: () => void;
}

export default function WateringButton({
  tokenId,
  onWateringComplete,
}: WateringButtonProps) {
  const config = useConfig();
  const account = getAccount(config);
  const { data: hash, isPending, writeContractAsync } = useWriteContract();

  async function handleWatering() {
    try {
      const transactionHash = await writeContractAsync({
        address: NFT_ADDRESS as `0x${string}`,
        abi: nftAbi,
        functionName: "wateringTree",
        args: [BigInt(tokenId)],
        value: BigInt("4000000000000000"), // 0.0004 ETH in wei
      });

      const transactionReceipt = await waitForTransactionReceipt(config, {
        hash: transactionHash,
      });

      console.log("Tree Water:", transactionReceipt);
      onWateringComplete?.();
    } catch (err) {
      console.log("failed to water the tree: ", err);
    }
  }

  return (
    <button
      onClick={handleWatering}
      disabled={isPending}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors flex-1 disabled:opacity-50"
    >
      {isPending ? "Watering..." : "💧 Water Tree"}
    </button>
  );
}
