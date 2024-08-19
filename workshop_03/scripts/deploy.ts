// async function main() {
//     const [deployer] = await ethers.getSigners();
//     console.log("Deploying contracts with the account: ", deployer.address);

//     const Floppy = await ethers.getContractFactory("Floppy");
//     const contract = await Floppy.deploy("0x2aE1F166133ab2Cf52920cfbbC4C4035ABd93608");
//     const addressContract = await contract.getAddress();
//     console.log("Contract deployed at:", addressContract);
// }



import { ethers, hardhatArguments } from 'hardhat';
import * as Config from './config';

async function main() {
    await Config.initConfig();
    const network = hardhatArguments.network ? hardhatArguments.network : 'dev';
    // const [deployer] = await ethers.getSigners();
    // console.log('deploy from address: ', deployer.address);

    // const Floppy = await ethers.getContractFactory("Floppy");
    // const floppy = await Floppy.deploy("0x2aE1F166133ab2Cf52920cfbbC4C4035ABd93608");
    // const addressFloppy = await floppy.getAddress();
    // console.log('Floppy address: ', addressFloppy);
    // Config.setConfig(network + '.Floppy', addressFloppy);

    // const Vault = await ethers.getContractFactory("Vault");
    // const vault = await Vault.deploy("0x2aE1F166133ab2Cf52920cfbbC4C4035ABd93608");
    // const addressVault = await vault.getAddress();
    // console.log('Vault address: ', addressVault);
    // Config.setConfig(network + '.Vault', addressVault);

    // const USDT = await ethers.getContractFactory("USDT");
    // const usdt = await USDT.deploy("0x2aE1F166133ab2Cf52920cfbbC4C4035ABd93608");
    // const addressUSDT = await usdt.getAddress();
    // console.log('USDT address: ', addressUSDT);
    // Config.setConfig(network + '.usdt', addressUSDT);

    const FLPCrowdSale = await ethers.getContractFactory("FLPCrowdSale");
    const fLPCrowdSale = await FLPCrowdSale.deploy(1000, 100, "0x2aE1F166133ab2Cf52920cfbbC4C4035ABd93608", "0x86B736289365981cC4576DAb27B2AFf4019406fD", "0x2aE1F166133ab2Cf52920cfbbC4C4035ABd93608");
    const addressFLPCrowdSale = await fLPCrowdSale.getAddress();
    console.log('FLPCrowdSale address: ', addressFLPCrowdSale);
    Config.setConfig(network + '.FLPCrowdSale', addressFLPCrowdSale);

    await Config.updateConfig();
}

main().then(() => process.exit(0))
    .catch(err => {
        console.error(err);
        process.exit(1);
});