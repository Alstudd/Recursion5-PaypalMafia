import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { config } from "dotenv";
config();

const { API_URL, PRIVATE_KEY } = process.env;

const hConfig: HardhatUserConfig = {
	solidity: "0.8.24",
	paths: {
		artifacts: "../frontend/artStore/artifacts",
	},
	networks: {
		hardhat: {
			chainId: 1337,
		},
		mumbai: {
			url: API_URL,
			accounts: [`0x${PRIVATE_KEY}`],
		},
	},
};

export default hConfig;
