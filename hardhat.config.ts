import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('@openzeppelin/hardhat-upgrades');
import { HttpNetworkAccountsUserConfig } from "hardhat/types";
import * as dotenv from 'dotenv'
dotenv.config()

const accounts: HttpNetworkAccountsUserConfig = [
  process.env.PRIVATE_KEY!,
]

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    paperchain : {
      url: "http://13.234.72.203:8123/",
      accounts
    }
  }
};

export default config;
