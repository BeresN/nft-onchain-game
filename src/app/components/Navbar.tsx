"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { useTheme } from "../providers";

interface NavbarProps {
  currentPage: string;
  title?: string;
}

export default function Navbar({
  currentPage,
  title = "Tree NFT Collection",
}: NavbarProps) {
  const { isDark, setIsDark } = useTheme();

  const getNavItemClass = (page: string) => {
    const isActive = currentPage === page;
    return `px-4 py-2 rounded-lg font-medium transition-colors ${
      isActive
        ? "bg-blue-600 text-white"
        : isDark
        ? "bg-gray-700 text-white hover:bg-gray-600"
        : "bg-white text-gray-800 hover:bg-gray-50"
    }`;
  };

  return (
    <div className="flex justify-between items-center mb-12">
      <h1
        className={`text-4xl font-bold ${
          isDark ? "text-white" : "text-gray-800"
        }`}
      >
        {title}
      </h1>
      <div className="flex gap-4 items-center">
        <nav className="flex gap-4">
          <Link href="/whitelist" className={getNavItemClass("whitelist")}>
            Sign Up
          </Link>
          <Link href="/mint" className={getNavItemClass("mint")}>
            Mint
          </Link>
          <Link href="/garden" className={getNavItemClass("garden")}>
            Garden
          </Link>
        </nav>
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
    </div>
  );
}
