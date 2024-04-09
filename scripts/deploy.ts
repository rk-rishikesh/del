// SPDX-License-Identifier: GPL-3.0

const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const PaperChain = await ethers.getContractFactory("PaperChain");
  const paperChain = await PaperChain.deploy();

  console.log("PaperChain address:", paperChain.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
