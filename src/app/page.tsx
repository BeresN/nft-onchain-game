"use client";

import { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const MOCK_TREE_NFTS = [
  { id: 1, name: "Ancient Oak", image: "/tree-1.png", stage: "Mature" },
  { id: 2, name: "Young Maple", image: "/tree-2.png", stage: "Growing" },
  { id: 3, name: "Elder Pine", image: "/tree-3.png", stage: "Ancient" },
];

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div
      className={`min-h-screen p-8 transition-colors ${
        isDark ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <main className="max-w-6xl mx-auto">
        <div className="flex justify-between items-right mb-12">
          <h1
            className={`text-4xl font-bold ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            Tree NFT Collection
          </h1>
          <button
            onClick={() => setIsDark(!isDark)}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              isDark
                ? "bg-yellow-500 text-gray-900 hover:bg-yellow-400"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
          >
            {isDark ? "☀️ Light" : "🌙 Dark"}
          </button>
          <ConnectButton />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_TREE_NFTS.map((nft) => (
            <div
              key={nft.id}
              className={`rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all ${
                isDark ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div
                className={`h-64 flex items-center justify-center ${
                  isDark ? "bg-gray-700" : "bg-gray-200"
                }`}
              >
                <div className="text-6xl">🌳</div>
              </div>
              <div className="p-6">
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    isDark ? "text-white" : "text-gray-800"
                  }`}
                >
                  {nft.name}
                </h3>
                <p
                  className={`mb-4 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Stage: {nft.stage}
                </p>
                <div className="flex justify-between items-center">
                  <span
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    NFT #{nft.id}
                  </span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
