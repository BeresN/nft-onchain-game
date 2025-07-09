"use client";

import { useTheme } from "../providers";
import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import Navbar from "../components/Navbar";
import NFTDisplayCard from "../components/NFTDisplayCard";
import useUserNFTs from "../hooks/useUserNFTs";

export default function Garden() {
  const { isDark } = useTheme();
  const { address } = useAccount();
  const [isClient, setIsClient] = useState(false);

  // Ensure component only renders on client to prevent hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  const { userTokenIds, isLoading, error, balance } = useUserNFTs({
    userAddress: address || "",
  });

  if (!isClient) {
    return (
      <div
        className={`min-h-screen p-8 transition-colors ${
          isDark ? "bg-gray-900" : "bg-gray-100"
        }`}
      >
        <main className="max-w-6xl mx-auto">
          <Navbar currentPage="garden" title="Your Collection" />
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">Loading...</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen p-8 transition-colors ${
        isDark ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <main className="max-w-6xl mx-auto">
        <Navbar currentPage="garden" title="Your Collection" />

        {!address ? (
          <div className="text-center py-12">
            <p
              className={`text-lg ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Please connect your wallet to view your NFTs
            </p>
          </div>
        ) : isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p
              className={`text-lg ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Loading your NFTs...
            </p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className={`text-lg text-red-500 mb-4`}>Error: {error}</p>
            <p
              className={`text-sm ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Please try refreshing the page
            </p>
          </div>
        ) : userTokenIds.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🌱</div>
            <p
              className={`text-lg ${
                isDark ? "text-gray-300" : "text-gray-600"
              } mb-2`}
            >
              No tree NFTs found in your wallet
            </p>
            <p
              className={`text-sm ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Mint your first tree NFT to start your garden!
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <p
                className={`text-lg ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              ></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {userTokenIds.map((tokenId: string) => (
                <NFTDisplayCard
                  key={tokenId}
                  tokenId={tokenId}
                  userAddress={address}
                />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
