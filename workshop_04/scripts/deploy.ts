import { ethers, hardhatArguments } from 'hardhat';
import * as Config from './config';

async function main() {
    await Config.initConfig();
    const network = hardhatArguments.network ? hardhatArguments.network : 'dev';
    // const [deployer] = await ethers.getSigners();
    // console.log('deploy from address: ', deployer.address);

    // const Floppy = await ethers.getContractFactory("Floppy");
    // const floppy = await Floppy.deploy("0x09a89Ce3c07E400CA3ad6478321badd0B9c8edD9");
    // const addressFloppy = await floppy.getAddress();
    // console.log('Floppy address: ', addressFloppy);
    // Config.setConfig(network + '.Floppy', addressFloppy);

    const Hero = await ethers.getContractFactory("Hero");
    const hero = await Hero.deploy("0x09a89Ce3c07E400CA3ad6478321badd0B9c8edD9");
    const addressVault = await hero.getAddress();
    console.log('Hero address: ', addressVault);
    Config.setConfig(network + '.Hero', addressVault);

    // const USDT = await ethers.getContractFactory("USDT");
    // const usdt = await USDT.deploy("0x09a89Ce3c07E400CA3ad6478321badd0B9c8edD9");
    // const addressUSDT = await usdt.getAddress();
    // console.log('USDT address: ', addressUSDT);
    // Config.setConfig(network + '.usdt', addressUSDT);

    // const FLPCrowdSale = await ethers.getContractFactory("FLPCrowdSale");
    // const fLPCrowdSale = await FLPCrowdSale.deploy(1000, 100, "0x09a89Ce3c07E400CA3ad6478321badd0B9c8edD9", "0x24f2Ac452d2E33E83ed77F00c394e01a35d923bB", "0x09a89Ce3c07E400CA3ad6478321badd0B9c8edD9");
    // const addressFLPCrowdSale = await fLPCrowdSale.getAddress();
    // console.log('FLPCrowdSale address: ', addressFLPCrowdSale);
    // Config.setConfig(network + '.FLPCrowdSale', addressFLPCrowdSale);

    await Config.updateConfig();
}

main().then(() => process.exit(0))
    .catch(err => {
        console.error(err);
        process.exit(1);
});