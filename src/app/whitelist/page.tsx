"use client";

import { useTheme } from "../providers";
import Navbar from "../components/Navbar";
import WhitelistButton from "../components/WhitelistButton";

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
            <WhitelistButton />
          </div>
        </div>
      </main>
    </div>
  );
}
