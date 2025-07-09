"use client";

import { useState } from "react";
import { useTheme } from "../providers";
import NFTView from "../hooks/NFTDisplay";
import TreeDetailsModal from "./TreeDetailsButton";
import WateringButton from "./WateringButton";

interface NFTDisplayCardProps {
  tokenId: string;
  userAddress: string;
}

export default function NFTDisplayCard({
  tokenId,
  userAddress,
}: NFTDisplayCardProps) {
  const { isDark } = useTheme();
  const [showDetails, setShowDetails] = useState(false);

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
              className="w-70 h-64 object-contain"
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

          <div className="flex gap-2">
            <WateringButton tokenId={tokenId} />
            <button
              onClick={() => setShowDetails(true)}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors flex-1"
            >
              🔍 Details
            </button>
          </div>
        </div>
      </div>
      {showDetails && (
        <TreeDetailsModal
          tokenId={tokenId}
          onClose={() => setShowDetails(false)}
        />
      )}
    </>
  );
}
