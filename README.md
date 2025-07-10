# 🌳 Tree NFT Collection - On-Chain Game

A dynamic NFT collection where users can mint, nurture, and grow unique tree NFTs through different growth stages. Each tree evolves based on user interaction and time, creating a gamified experience entirely on-chain.


## 🎮 Try it out
https://nft-onchain-game.vercel.app/

## 🎮 Game Features

### Core Gameplay

- **Mint Tree NFTs**: Choose from Summer, Snow, or Autumn tree types (in a future will be more)
- **Water & Care**: Regular watering keeps trees healthy and promotes growth
- **Evolution System**: Trees progress through 4 growth stages with unique artwork
- **Wither Mechanic**: Neglected trees wither and require revival
- **Dynamic Metadata**: NFT metadata changes based on tree's current state

### Tree Growth Stages

1. **Sapling** (Stage 1) - Starting stage after minting
2. **Young Tree** (Stage 2) - 30+ days old, 15+ waterings
3. **Mature Tree** (Stage 3) - 60+ days old, 30+ waterings
4. **Ancient Tree** (Stage 4) - 120+ days old, 50+ waterings
5. **Withered Tree** (Stage 0) - 5 days without watering

### Tree Types

- **Summer Trees** 🌿 - Vibrant green foliage
- **Snow Trees** ❄️ - Winter-themed with snow-covered branches
- **Autumn Trees** 🍂 - Beautiful fall colors and seasonal appearance

## 🛠️ Technical Stack

### Frontend

- **Next.js 15**
- **TypeScript**
- **Tailwind CSS**
- **RainbowKit**
- **wagmi**
- **viem**

### Smart Contracts

- **Solidity**
- **OpenZeppelin**
- **Foundry**

### Infrastructure

- **IPFS** - Decentralized metadata storage
- **Pinata** - IPFS pinning service

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Foundry (for smart contract development)
- MetaMask or compatible wallet

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/your-username/nft-onchain-game.git
cd nft-onchain-game
```

### Frontend Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

### Smart Contract Development

```bash
# Navigate to contracts directory
cd contracts

# Install dependencies
npm install

# Compile contracts
forge build

# Run tests
forge test

# Deploy to testnet
forge script script/TestnetDeploy.s.sol --rpc-url sepolia --broadcast
```

## 🎯 How to Play

1. **Join Whitelist**: Get approved to mint your first tree NFT
2. **Mint Tree**: Choose your preferred tree type and mint for 0.0001 ETH
3. **Water Regularly**: Pay 0.00001 ETH to water your tree (once per day)
4. **Watch Growth**: Trees evolve through stages based on age and care
5. **Collect Variants**: Each growth stage creates a new NFT in your collection

## 📱 Application Pages

### Home Page (`/`)

- Landing page with project overview
- Feature highlights and gameplay explanation
- Call-to-action buttons

### Whitelist Page (`/whitelist`)

- Whitelist registration form
- Status checking for approved addresses

### Mint Page (`/mint`)

- Tree type selection interface
- Minting functionality with wallet integration
- Transaction status and confirmation

### Garden Page (`/garden`)

- Personal NFT collection viewer
- Individual tree details and statistics
- Watering and care actions

## 🔧 Smart Contract Architecture

### Core Contracts

#### `TreeNFTCollection.sol`

- Base ERC721 implementation
- Minting logic with whitelist verification
- Tree data storage and management
- Dynamic metadata URI generation

#### `TreeGrowthStages.sol` (inherits TreeNFTCollection)

- Watering mechanics and cooldown system
- Growth stage calculation algorithms
- Tree evolution and new token minting
- Wither detection and revival system

#### `Whitelist.sol`

- Address approval system for minting
- Owner-controlled whitelist management

## 📊 Game Economics

- **Mint Price**: 0.0001 ETH
- **Watering Cost**: 0.0001 ETH
- **Revival Cost**: 0.005 ETH (5x watering cost)
- **Watering Cooldown**: 24 hours
- **Wither Time**: 5 days without watering

### Mainnet

- Coming soon after thorough testing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Live Demo**: [Your deployed URL]
- **Smart Contracts**: [Etherscan verification links]
- **Documentation**: [Additional docs if any]

## 🙏 Acknowledgments

- OpenZeppelin for secure smart contract standards
- Foundry team for excellent development tools
- RainbowKit for seamless wallet integration
- The Ethereum community for continuous innovation
