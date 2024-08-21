import { ethers, hardhatArguments } from 'hardhat';
import * as Config from './config';

async function main() {
    await Config.initConfig();
    const network = hardhatArguments.network ? hardhatArguments.network : 'dev';

    // const Hero = await ethers.getContractFactory("Hero");
    // const hero = await Hero.deploy("0x09a89Ce3c07E400CA3ad6478321badd0B9c8edD9");
    // const addressVault = await hero.getAddress();
    // console.log('Hero address: ', addressVault);
    // Config.setConfig(network + '.Hero', addressVault);

    const NFTMarketplace = await ethers.getContractFactory("NFTMarketplace");
    const nftMarketplace = await NFTMarketplace.deploy("0x09a89Ce3c07E400CA3ad6478321badd0B9c8edD9", "0xCa1A17EFb5794C606D949E25740068D8DA2b44ae");
    const addressNFTMarketplace = await nftMarketplace.getAddress();
    console.log('NFTMarketplace address: ', addressNFTMarketplace);
    Config.setConfig(network + '.NFTMarketplace', addressNFTMarketplace);


    await Config.updateConfig();
}

main().then(() => process.exit(0))
    .catch(err => {
        console.error(err);
        process.exit(1);
});