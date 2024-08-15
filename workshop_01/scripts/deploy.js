async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account: ", deployer.address);

    const Floppy = await ethers.getContractFactory("Floppy");
    const contract = await Floppy.deploy("0x2aE1F166133ab2Cf52920cfbbC4C4035ABd93608");
    const addressContract = await contract.getAddress();
    console.log("Contract deployed at:", addressContract);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });