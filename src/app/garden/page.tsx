"use client";

import { useTheme } from "../providers";
import { useState } from "react";
import Navbar from "../components/Navbar";

const MOCK_TREE_NFTS = [
  {
    id: 1,
    name: "Ancient Oak",
    image: "/tree-1.png",
    stage: "Mature",
    lastWatered: "2 days ago",
    health: 85,
  },
  {
    id: 2,
    name: "Young Maple",
    image: "/tree-2.png",
    stage: "Growing",
    lastWatered: "1 day ago",
    health: 92,
  },
  {
    id: 3,
    name: "Elder Pine",
    image: "/tree-3.png",
    stage: "Ancient",
    lastWatered: "3 hours ago",
    health: 78,
  },
];

export default function Garden() {
  const { isDark } = useTheme();
  const [selectedTree, setSelectedTree] = useState<any>(null);

  return (
    <div
      className={`min-h-screen p-8 transition-colors ${
        isDark ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <main className="max-w-6xl mx-auto">
        <Navbar currentPage="garden" title="Tree Garden" />

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
                <div className="space-y-2 mb-4">
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Stage: {nft.stage}
                  </p>
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Last watered: {nft.lastWatered}
                  </p>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-sm ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Health:
                    </span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          nft.health > 80
                            ? "bg-green-500"
                            : nft.health > 60
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                        style={{ width: `${nft.health}%` }}
                      ></div>
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {nft.health}%
                    </span>
                  </div>
                </div>
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
                    onClick={() => setSelectedTree(nft)}
                  >
                    💧 Water Tree
                  </button>
                  <button
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors flex-1"
                    onClick={() => setSelectedTree(nft)}
                  >
                    🔍 Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedTree && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div
              className={`rounded-lg shadow-xl p-8 max-w-md w-full ${
                isDark ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h3
                className={`text-2xl font-bold mb-4 ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                {selectedTree.name}
              </h3>
              <div className="space-y-3 mb-6">
                <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                  <strong>Stage:</strong> {selectedTree.stage}
                </p>
                <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                  <strong>Last Watered:</strong> {selectedTree.lastWatered}
                </p>
                <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                  <strong>Health:</strong> {selectedTree.health}%
                </p>
                <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                  <strong>NFT ID:</strong> #{selectedTree.id}
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors flex-1"
                  onClick={() => {
                    alert(`Watered ${selectedTree.name}!`);
                    setSelectedTree(null);
                  }}
                >
                  💧 Water Now
                </button>
                <button
                  className={`px-6 py-2 rounded transition-colors ${
                    isDark
                      ? "bg-gray-700 text-white hover:bg-gray-600"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                  onClick={() => setSelectedTree(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
