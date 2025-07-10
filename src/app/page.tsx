"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useTheme } from "./providers";
import Navbar from "./components/Navbar";

export default function Home() {
  const { isDark, setIsDark } = useTheme();

  return (
    <div
      className={`min-h-screen p-8 transition-colors ${
        isDark ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <main className="max-w-6xl mx-auto">
        <Navbar currentPage="home" title="Tree NFT Collection" />

        {/* Hero Section */}
        <div className="text-center py-16">
          <div className="text-8xl mb-8">🌳</div>
          <h1
            className={`text-5xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            Grow Your Digital Forest
          </h1>
          <p
            className={`text-xl mb-8 max-w-3xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Plant, nurture, and watch your tree NFTs evolve through different
            seasons and growth stages. Each tree is unique and changes based on
            your care and attention.
          </p>

          {/* Testnet Notice */}
          <div
            className={`inline-block px-6 py-4 rounded-lg mb-8 ${
              isDark
                ? "bg-blue-900 border-blue-700"
                : "bg-blue-50 border-blue-200"
            } border-2`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🧪</span>
              <h3
                className={`text-lg font-semibold ${
                  isDark ? "text-blue-300" : "text-blue-700"
                }`}
              >
                Demo on Sepolia Testnet
              </h3>
            </div>
            <p
              className={`text-sm ${
                isDark ? "text-blue-200" : "text-blue-600"
              }`}
            >
              This app is deployed on Sepolia testnet for demonstration
              purposes.
            </p>
            <p
              className={`text-sm mt-2 ${
                isDark ? "text-blue-200" : "text-blue-600"
              }`}
            >
              <strong>To try it out:</strong> Connect your wallet, get free
              Sepolia ETH from a{" "}
              <a
                href="https://cloud.google.com/application/web3/faucet/ethereum/sepolia"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
              >
                faucet
              </a>
              , then join the whitelist to mint your first tree NFT!
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div
            className={`p-6 rounded-lg ${
              isDark ? "bg-gray-800" : "bg-white"
            } shadow-lg`}
          >
            <div className="text-4xl mb-4">🌱</div>
            <h3
              className={`text-xl font-semibold mb-2 ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              Plant Your Tree
            </h3>
            <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
              Choose from Summer, Snow, or Autumn tree types. Each type has
              unique characteristics and visual appeal.
            </p>
          </div>

          <div
            className={`p-6 rounded-lg ${
              isDark ? "bg-gray-800" : "bg-white"
            } shadow-lg`}
          >
            <div className="text-4xl mb-4">💧</div>
            <h3
              className={`text-xl font-semibold mb-2 ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              Water & Care
            </h3>
            <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
              Regular watering keeps your tree healthy and helps it grow through
              different stages. Neglect leads to withering.
            </p>
          </div>

          <div
            className={`p-6 rounded-lg ${
              isDark ? "bg-gray-800" : "bg-white"
            } shadow-lg`}
          >
            <div className="text-4xl mb-4">🌲</div>
            <h3
              className={`text-xl font-semibold mb-2 ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              Watch It Grow
            </h3>
            <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
              Your tree evolves through multiple growth stages, each with unique
              artwork and characteristics based on your care.
            </p>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="text-center py-16">
          <h2
            className={`text-3xl font-bold mb-12 ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  isDark ? "bg-green-800" : "bg-green-600"
                }`}
              >
                <span className="text-2xl">1</span>
              </div>
              <h4
                className={`font-semibold mb-2 ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Sign Up
              </h4>
              <p
                className={`text-sm ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Join the whitelist to get access to mint your first tree NFT
              </p>
            </div>

            <div className="text-center">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  isDark ? "bg-green-800" : "bg-green-600"
                }`}
              >
                <span className="text-2xl">2</span>
              </div>
              <h4
                className={`font-semibold mb-2 ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Mint
              </h4>
              <p
                className={`text-sm ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Choose your tree type and mint your unique NFT sapling
              </p>
            </div>

            <div className="text-center">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  isDark ? "bg-green-800" : "bg-green-600"
                }`}
              >
                <span className="text-2xl">3</span>
              </div>
              <h4
                className={`font-semibold mb-2 ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Care
              </h4>
              <p
                className={`text-sm ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Water regularly and watch your tree grow through different
                stages
              </p>
            </div>

            <div className="text-center">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  isDark ? "bg-green-800" : "bg-green-600"
                }`}
              >
                <span className="text-2xl">4</span>
              </div>
              <h4
                className={`font-semibold mb-2 ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Evolve
              </h4>
              <p
                className={`text-sm ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Your tree evolves into new NFTs with unique artwork at each
                stage
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`text-center py-16 rounded-lg ${
            isDark ? "bg-gray-800" : "bg-white"
          } shadow-lg`}
        >
          <h2
            className={`text-3xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            Ready to Start Your Garden?
          </h2>
          <p
            className={`text-lg mb-8 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Join thousands of gardeners growing their digital forest on the
            blockchain
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/whitelist"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Get Started
            </a>
            <a
              href="/garden"
              className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                isDark
                  ? "bg-gray-700 text-white hover:bg-gray-600"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              View Collection
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
