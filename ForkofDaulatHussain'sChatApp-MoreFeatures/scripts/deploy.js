
const hre = require("hardhat");

async function main() {
  const Chat = await hre.ethers.getContractFactory("Chat");
  const chat = await Chat.deploy();

  await chat.deployed();

  console.log(`Contract Address : ${chat.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
