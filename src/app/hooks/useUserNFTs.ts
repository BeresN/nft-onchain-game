"use client";

import { useState, useEffect } from "react";
import { useReadContract, usePublicClient } from "wagmi";
import nftAbi from "../../../abis/growthStagesAbi.json";
import { NFT_ADDRESS } from "../components/contracts";

interface UseUserNFTsProps {
  userAddress: string;
}

export default function useUserNFTs({ userAddress }: UseUserNFTsProps) {
  const [userTokenIds, setUserTokenIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const publicClient = usePublicClient();

  // Get user's NFT balance
  const { data: balance, isLoading: isBalanceLoading } = useReadContract({
    abi: nftAbi,
    address: NFT_ADDRESS as `0x${string}`,
    functionName: "balanceOf",
    args: [userAddress as `0x${string}`],
    query: {
      enabled: !!userAddress,
    },
  });

  useEffect(() => {
    if (!balance || !userAddress || isBalanceLoading || !publicClient) return;

    const fetchUserTokens = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const userBalance = Number(balance);
        if (userBalance === 0) {
          setUserTokenIds([]);
          return;
        }

        const foundTokens: string[] = [];

        // Check token IDs 1-100 (adjust range based on your collection)
        // This is a simple approach - for production, consider using events or subgraphs
        for (
          let tokenId = 1;
          tokenId <= 15 && foundTokens.length < userBalance;
          tokenId++
        ) {
          try {
            const owner = await publicClient.readContract({
              address: NFT_ADDRESS as `0x${string}`,
              abi: nftAbi,
              functionName: "ownerOf",
              args: [BigInt(tokenId)],
            });

            if (
              typeof owner === "string" &&
              owner.toLowerCase() === userAddress.toLowerCase()
            ) {
              foundTokens.push(tokenId.toString());
            }
          } catch (err) {
            // Token doesn't exist or error reading - skip
            continue;
          }
        }

        setUserTokenIds(foundTokens);
      } catch (err) {
        console.error("Error fetching user tokens:", err);
        setError("Failed to fetch user NFTs");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserTokens();
  }, [balance, userAddress, isBalanceLoading, publicClient]);

  return {
    userTokenIds,
    isLoading: isLoading || isBalanceLoading,
    error,
    balance: balance ? Number(balance) : 0,
  };
}
