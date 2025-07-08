"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useTheme } from "./providers";

export default function Home() {
  const { isDark, setIsDark } = useTheme();

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
      </main>
    </div>
  );
}
