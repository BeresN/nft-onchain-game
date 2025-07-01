"use client";

import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { sepolia, mainnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import "./globals.css";

// Initialize the Query Client
const queryClient = new QueryClient();

// Create wagmi config with RainbowKit
const config = getDefaultConfig({
  appName: "Tree NFT Game",
  projectId: process.env.NEXT_PUBLIC_REOWN_PROJECT_ID!,
  chains: [sepolia, mainnet],
  transports: {
    [sepolia.id]: http(process.env.NEXT_PUBLIC_ALCHEMY_SEPOLIA_API),
    [mainnet.id]: http(process.env.NEXT_PUBLIC_ALCHEMY_MAINNET_API),
  },
});

// Export the providers component
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()}>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
