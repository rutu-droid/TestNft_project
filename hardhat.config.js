/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

const { API_URL_KEY, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {},
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/rPXw_VY8HMt70xgaFgvD3mlmtaRFRdc6",
      accounts: [`0xeb548cd9aabc79392d5b01ff8b6d74168cfe99a8e370c03eb0aa466f87bb77cb`],
    },
  },
};

