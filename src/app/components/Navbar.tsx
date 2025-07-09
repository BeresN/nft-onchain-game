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
    return `px-3 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
      isActive
        ? "bg-green-600 text-white"
        : isDark
        ? "bg-gray-700 text-white hover:bg-gray-600"
        : "bg-white text-gray-800 hover:bg-gray-50"
    }`;
  };

  return (
    <div className="flex justify-between items-center mb-12">
      <h1
        className={`text-4xl font-bold flex-1 ${
          isDark ? "text-white" : "text-gray-800"
        }`}
      >
        {title}
      </h1>
      <div className="flex gap-3 items-center flex-shrink-0">
        <nav className="flex gap-2">
          <Link href="/" className={getNavItemClass("home")}>
            Homepage
          </Link>
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
        <ConnectButton />
        <button
          onClick={() => setIsDark(!isDark)}
          className={`px-2 py-2 rounded-lg font-medium transition-colors`}
        >
          {isDark ? "☀️ " : "🌙 "}
        </button>
      </div>
    </div>
  );
}
