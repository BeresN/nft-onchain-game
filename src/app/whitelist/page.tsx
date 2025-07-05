"use client";

import { useTheme } from "../providers";
import Navbar from "../components/Navbar";

export default function Whitelist() {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen p-8 transition-colors ${
        isDark ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <main className="max-w-6xl mx-auto">
        <Navbar currentPage="whitelist" title="Whitelist Signup" />

        <div className="max-w-2xl mx-auto">
          <div
            className={`rounded-lg shadow-lg p-8 ${
              isDark ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h2
              className={`text-2xl font-bold mb-6 ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              Join the Whitelist
            </h2>
            <p className={`mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              Sign up to get early access to mint your Tree NFT. Limited spots
              available!
            </p>
            <form className="space-y-4">
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Wallet Address
                </label>
                <input
                  type="text"
                  className={`w-full px-4 py-2 rounded-lg border transition-colors ${
                    isDark
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                  placeholder="0x..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Join Whitelist
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
