"use client";

import { useState } from "react";
import { useTheme } from "../providers";
import NFTView from "../hooks/NFTDisplay";

interface NFTDisplayCardProps {
  tokenId: string;
  userAddress: string;
}

export default function NFTDisplayCard({
  tokenId,
  userAddress,
}: NFTDisplayCardProps) {
  const { isDark } = useTheme();
  const [selectedTree, setSelectedTree] = useState<string | null>(null);

  const {
    nftImageUrl,
    isLoadingImage,
    imageError,
    isTokenURILoading,
    tokenURIError,
  } = NFTView({
    tokenId,
    userAddress,
  });

  return (
    <>
      <div
        className={`rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all ${
          isDark ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div
          className={`h-64 flex items-center justify-center ${
            isDark ? "bg-gray-700" : "bg-gray-200"
          }`}
        >
          {isLoadingImage || isTokenURILoading ? (
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          ) : imageError || tokenURIError ? (
            <div className="text-center">
              <div className="text-4xl mb-2">🌱</div>
              <p
                className={`text-sm ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Failed to load
              </p>
            </div>
          ) : (
            <img
              src={nftImageUrl || "/placeholder.png"}
              alt={`NFT ${tokenId}`}
              className="w-70 h-65 object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/placeholder.png";
              }}
            />
          )}
        </div>
        <div className="p-6">
          <h3
            className={`text-xl font-semibold mb-2 ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            Tree NFT #{tokenId}
          </h3>
          <div className="space-y-2 mb-4">
            <p
              className={`text-sm ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Status:{" "}
              {isLoadingImage ? "Loading..." : imageError ? "Error" : "Loaded"}
            </p>
            <p
              className={`text-sm ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Owner: {userAddress.slice(0, 6)}...{userAddress.slice(-4)}
            </p>
          </div>
          <span
            className={`text-sm mb-4 block ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            NFT #{tokenId}
          </span>

          <div className="flex gap-2">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors flex-1"
              onClick={() => setSelectedTree(tokenId)}
            >
              💧 Water Tree
            </button>
            <button
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors flex-1"
              onClick={() => setSelectedTree(tokenId)}
            >
              🔍 Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
