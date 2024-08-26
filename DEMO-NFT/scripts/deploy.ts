import { ethers, hardhatArguments } from 'hardhat';
import * as Config from './config';

async function main() {
    await Config.initConfig();
    const network = hardhatArguments.network ? hardhatArguments.network : 'dev';
    const addressOwner = "0x09a89Ce3c07E400CA3ad6478321badd0B9c8edD9";
    const USDT = await ethers.getContractFactory("USDT");
    const usdt = await USDT.deploy(addressOwner);
    const addressUSDT = await usdt.getAddress();
    console.log('USDT address: ', addressUSDT);
    Config.setConfig(network + '.USDT', addressUSDT);

    const NFTLabubu = await ethers.getContractFactory("NFTLabubu");
    const nftLabubu = await NFTLabubu.deploy(addressOwner, addressUSDT);
    const addressNFTLabubu = await nftLabubu.getAddress();
    console.log('NFTLabubu address: ', addressNFTLabubu);
    Config.setConfig(network + '.NFTLabubu', addressNFTLabubu);


    await Config.updateConfig();
}

main().then(() => process.exit(0))
    .catch(err => {
        console.error(err);
        process.exit(1);
});