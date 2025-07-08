"use client";

import { useTheme } from "../providers";
import Navbar from "../components/Navbar";
import MintButton from "../components/MintButton";

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
            <MintButton />
          </div>
        </div>
      </main>
    </div>
  );
}
