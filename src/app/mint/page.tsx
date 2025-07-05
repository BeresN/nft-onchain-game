"use client";

import { useTheme } from "../providers";
import Navbar from "../components/Navbar";

export default function Mint() {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen p-8 transition-colors ${
        isDark ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <main className="max-w-6xl mx-auto">
        <Navbar currentPage="mint" title="Mint Your Tree NFT" />

        <div className="max-w-4xl mx-auto">
          <div
            className={`rounded-lg shadow-lg p-8 mb-8 ${
              isDark ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h2
              className={`text-2xl font-bold mb-6 ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              Mint Your Tree NFT
            </h2>
            <p className={`mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              Choose your tree type and mint your unique NFT. Each tree will
              grow and evolve over time!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {["Summer", "Autumn", "Winter"].map((treeType) => (
                <div
                  key={treeType}
                  className={`border-2 rounded-lg p-6 cursor-pointer transition-all hover:shadow-lg ${
                    isDark
                      ? "border-gray-600 bg-gray-700 hover:border-blue-500"
                      : "border-gray-200 bg-gray-50 hover:border-blue-500"
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
                <p className="text-lg font-semibold mb-2">
                  Mint Price: 0.01 ETH
                </p>
                <p className="text-sm">Connect your wallet to proceed</p>
              </div>
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors text-lg">
                Mint Tree NFT
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}