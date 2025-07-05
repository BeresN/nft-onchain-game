"use client";

import "@rainbow-me/rainbowkit/styles.css";
import {
  RainbowKitProvider,
  darkTheme,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import { createContext, useContext, useState, ReactNode } from "react";
import { WagmiProvider } from "wagmi";
import { sepolia, mainnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import "./globals.css";

// Initialize the Query Client
const queryClient = new QueryClient();

// Theme Context
interface ThemeContextType {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

function RainbowKitWrapper({ children }: { children: ReactNode }) {
  const { isDark } = useTheme();

  return (
    <RainbowKitProvider theme={isDark ? darkTheme() : lightTheme()}>
      {children}
    </RainbowKitProvider>
  );
}

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
        <ThemeProvider>
          <RainbowKitWrapper>{children}</RainbowKitWrapper>
        </ThemeProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
