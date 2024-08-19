async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account: ", deployer.address);

    const Floppy = await ethers.getContractFactory("Floppy");
    const contract = await Floppy.deploy("0x09a89Ce3c07E400CA3ad6478321badd0B9c8edD9");
    const addressContract = await contract.getAddress();
    console.log("Contract deployed at:", addressContract);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });