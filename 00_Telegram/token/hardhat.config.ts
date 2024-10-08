import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config({ path: __dirname+'/.env' });

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    bsctest: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      accounts: [process.env.PRIV_KEY || ""]
    }
  },
  etherscan: {
    apiKey: process.env.API_KEY
  }
};

export default config;