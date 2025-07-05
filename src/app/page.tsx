"use client";

import { useTheme } from "./providers";
import { useState } from "react";
import Navbar from "./components/Navbar";

const MOCK_TREE_NFTS = [
  { id: 1, name: "Ancient Oak", image: "/tree-1.png", stage: "Mature" },
  { id: 2, name: "Young Maple", image: "/tree-2.png", stage: "Growing" },
  { id: 3, name: "Elder Pine", image: "/tree-3.png", stage: "Ancient" },
];

export default function Home() {
  const { isDark } = useTheme();
  const [waterTree, setWaterTree] = useState("");
  const [viewDetails, setViewDetails] = useState("");

  return (
    <div
      className={`min-h-screen p-8 transition-colors ${
        isDark ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <main className="max-w-6xl mx-auto">
        <Navbar currentPage="home" />

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
                  className={`mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Stage: {nft.stage}
                </p>
                <span
                  className={`text-sm mb-4 block ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  NFT #{nft.id}
                </span>

                <div className="flex gap-2">
                  <button
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors flex-1"
                    onClick={() => setWaterTree("")}
                  >
                    Water The Tree
                  </button>
                  <button
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors flex-1"
                    onClick={() => setViewDetails("")}
                  >
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
