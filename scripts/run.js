// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
async function main() {
  const ElonNFT = await ethers.getContractFactory("ElonNFT");
  console.log("Deploying Contract...");
  const elon = await ElonNFT.deploy();
  const txHash = elon.deployTransaction.hash;
  const txReceipt = await ethers.provider.waitForTransaction(txHash);
  console.log("Contract deployed to address:", txReceipt.contractAddress);
  console.log("Minting NFT...");
  let txn = await elon.mintNFT();
  await txn.wait();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
