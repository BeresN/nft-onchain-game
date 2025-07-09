"use client";
import { useState } from "react";
import { useReadContract } from "wagmi";
import { useTheme } from "../providers";
import nftAbi from "../../../abis/growthStagesAbi.json";
import { NFT_ADDRESS } from "./contracts";

interface TreeDetailsProps {
  tokenId: string;
  onClose: () => void;
}

type TreeData = [number, bigint, bigint, number, number];

export default function TreeDetailsModal({
  tokenId,
  onClose,
}: TreeDetailsProps) {
  const { isDark } = useTheme();

  const { data: treeData, isLoading } = useReadContract({
    address: NFT_ADDRESS as `0x${string}`,
    abi: nftAbi,
    functionName: "getTreeData",
    args: [tokenId ? BigInt(tokenId) : undefined],
  }) as { data: TreeData | undefined; isLoading: boolean };

  const getTreeTypeName = (treeType: number): string => {
    switch (treeType) {
      case 0:
        return "Summer Type";
      case 1:
        return "Snow Type";
      case 2:
        return "Autumn Type";
      default:
        return "Unknown";
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
    >
      <div
        className={`rounded-lg p-6 max-w-md w-full mx-4 ${
          isDark ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2
            className={`text-xl font-bold ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            Tree Details #{tokenId}
          </h2>
          <button
            onClick={onClose}
            className={`text-2xl ${
              isDark
                ? "text-gray-400 hover:text-white"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            ×
          </button>
        </div>

        {isLoading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          </div>
        ) : treeData ? (
          <div className="space-y-3">
            <div
              className={`p-3 rounded ${
                isDark ? "bg-gray-700" : "bg-gray-100"
              }`}
            >
              <span
                className={`font-semibold ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Tree type: {getTreeTypeName(treeData[0])}
              </span>
            </div>
            <div
              className={`p-3 rounded ${
                isDark ? "bg-gray-700" : "bg-gray-100"
              }`}
            >
              <span
                className={`font-semibold ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Planted time:{" "}
                {treeData[1]
                  ? new Date(Number(treeData[1]) * 1000).toLocaleString()
                  : "Unknown"}
              </span>
            </div>
            <div
              className={`p-3 rounded ${
                isDark ? "bg-gray-700" : "bg-gray-100"
              }`}
            >
              <span
                className={`font-semibold ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Last watered:{" "}
                {treeData[2]
                  ? new Date(Number(treeData[2]) * 1000).toLocaleString()
                  : "Never"}
              </span>
            </div>
            <div
              className={`p-3 rounded ${
                isDark ? "bg-gray-700" : "bg-gray-100"
              }`}
            >
              <span
                className={`font-semibold ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Growth stage: {treeData[3]?.toString() || "0"}
              </span>
            </div>
            <div
              className={`p-3 rounded ${
                isDark ? "bg-gray-700" : "bg-gray-100"
              }`}
            >
              <span
                className={`font-semibold ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Waterings: {treeData[4]?.toString() || "0"}
              </span>
            </div>
          </div>
        ) : (
          <p
            className={`text-center py-8 ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            No tree data available
          </p>
        )}
      </div>
    </div>
  );
}
