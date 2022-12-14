import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

/**
 * Hardhat task defining the contract deployments
 *
 * @param hre Hardhat environment to deploy to
 */
const func: DeployFunction = async (
  hre: HardhatRuntimeEnvironment
): Promise<void> => {
  const chainId = await hre.getChainId();
  let deployer;
  ({ deployer } = await hre.getNamedAccounts());
  if (!deployer) {
    [deployer] = await hre.getUnnamedAccounts();
  }
  console.log({ chainId, deployer });

  // Deploy distribution contract
  console.log(`Deploying contract to chain:${chainId}`);
  await hre.deployments.deploy("NftToken", {
    from: deployer,
    log: true,
  });
};

export default func;
