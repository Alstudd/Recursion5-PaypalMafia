import { ethers } from "hardhat";

async function main() {
	const instance = await ethers.deployContract("IssueTracker");

	await instance.waitForDeployment();
	console.log(`Contract deployed to ${instance.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
