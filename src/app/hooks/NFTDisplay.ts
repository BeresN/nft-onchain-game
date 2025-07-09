"use client";
import { useState, useEffect } from "react";
import { useReadContract } from "wagmi";
import nftAbi from "../../../abis/growthStagesAbi.json";

import {
  NFT_ADDRESS,
  NFT_CONTRACT_OWNER_ADDRESS,
} from "../components/contracts";

interface NFTBox {
  tokenId: string;
  userAddress: string;
}

export default function NFTView({ tokenId, userAddress }: NFTBox) {
  const [nftImageUrl, setNftImageUrl] = useState<string>("");
  const [isLoadingImage, setIsLoadingImage] = useState(false);
  const [imageError, setImageError] = useState(false);

  //fetching for token URI
  const {
    data: tokenURIData,
    isLoading: isTokenURILoading,
    error: tokenURIError,
  } = useReadContract({
    abi: nftAbi,
    address: NFT_ADDRESS as `0x${string}`,
    functionName: "tokenURI",
    args: [tokenId ? BigInt(tokenId) : undefined],
    query: {
      enabled: !!tokenId && !!userAddress,
    },
  });

  useEffect(() => {
    if (tokenURIData && !isTokenURILoading) {
      const fetchMetadata = async () => {
        setIsLoadingImage(true);
        try {
          const uri = tokenURIData as string;
          let url = uri;
          
          // Convert IPFS to HTTP gateway if needed
          if (uri.startsWith('ipfs://')) {
            url = uri.replace('ipfs://', 'https://ipfs.io/ipfs/');
          }
          
          const response = await fetch(url);
          const metadata = await response.json();
          let imageUrl = metadata.image;

          // Convert image URL if it's IPFS
          if (imageUrl?.startsWith('ipfs://')) {
            imageUrl = imageUrl.replace('ipfs://', 'https://ipfs.io/ipfs/');
          }

          setNftImageUrl(imageUrl);
          setImageError(false);
        } catch (err) {
          console.error("Error while fetching for metadata: ", err);
          setImageError(true);
        } finally {
          setIsLoadingImage(false);
        }
      };
      fetchMetadata();
    }
  }, [tokenURIData, isTokenURILoading, tokenId, userAddress]);

  return {
    nftImageUrl,
    isLoadingImage,
    imageError,
    isTokenURILoading,
    tokenURIError,
  };
}
