import { ethers, hardhatArguments } from 'hardhat';
import * as Config from './config';

async function main() {
    await Config.initConfig();
    const network = hardhatArguments.network ? hardhatArguments.network : 'dev';

    // const addressOwner = "0x09a89Ce3c07E400CA3ad6478321badd0B9c8edD9";

    // const USDT = await ethers.getContractFactory("USDT");
    // const usdt = await USDT.deploy("0x09a89Ce3c07E400CA3ad6478321badd0B9c8edD9");
    // const addressUSDT = await usdt.getAddress();
    // console.log('USDT address: ', addressUSDT);
    // Config.setConfig(network + '.USDT', addressUSDT);

    const NFTLaBuBu = await ethers.getContractFactory("NFTLabubu");
    const nftLaBuBu = await NFTLaBuBu.deploy("0x09a89Ce3c07E400CA3ad6478321badd0B9c8edD9", "0x9dB96aBB88C94C3A42059beaB7EfC8795FE5C25A");
    const addressNFTLaBuBu = await nftLaBuBu.getAddress();
    console.log('NFTLaBuBu address: ', addressNFTLaBuBu);
    Config.setConfig(network + '.NFTLaBuBu', addressNFTLaBuBu);


    await Config.updateConfig();
}

main().then(() => process.exit(0))
    .catch(err => {
        console.error(err);
        process.exit(1);
});