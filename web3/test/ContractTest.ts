import { expect } from "chai";
import { ethers } from "hardhat";

describe("IssueTracker", function () {
	let IssueTracker: any;
	let instance: any;

	it("Stores an issue", async function () {
		IssueTracker = await ethers.getContractFactory("IssueTracker");
		instance = await IssueTracker.deploy();
		await instance.createIssue("a", "b", "c", "d");
	});
});
