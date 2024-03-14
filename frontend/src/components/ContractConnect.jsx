import contractABI from "../../artStore/artifacts/contracts/IsuueTracker.sol/IssueTracker.json";
import { AlchemyProvider, Contract, ethers } from "ethers";

const provider = new AlchemyProvider(
	"maticmum",
	import.meta.env.VITE_PUBLIC_ALCHEMY_API_KEY
);

const signer = new ethers.Wallet(
	import.meta.env.VITE_PUBLIC_PRIVATE_KEY,
	provider
);

export const contractInstance = new Contract(
	import.meta.env.VITE_PUBLIC_CONTRACT_ADDRESS,
	contractABI.abi,
	signer
);
