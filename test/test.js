const { expect } = require("chai");
const { ethers } = require("hardhat");
const { BigNumber } = require("ethers");

describe("Dop distribution", function() {
  it("Should return the new greeting once it's changed", async function() {
    console.log("Start testcase........");
    [owner, addr1, addr2, addr3, ...addrs] = await ethers.getSigners();
    
    const NFTContract = await ethers.getContractFactory("NftToken");
    
    const NFTCreater = await NFTContract.deploy();
   
    console.log("This is NFT Creater contract:", NFTCreater.address);
    await NFTCreater.mint(addr1.address);
  });
});
