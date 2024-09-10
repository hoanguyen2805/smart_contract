//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "hardhat/console.sol";
contract USDT is
    ERC20("USDT", "USDT"),
    ERC20Burnable,
    Ownable
{
    uint256 private cap = 50_000_000_000 * 10**uint256(18);

    uint public tapReward = 1 ether; // Reward for taps (using Ether for simplicity)
    mapping(address => uint) public taps;

    constructor(address initialOwner) Ownable(initialOwner) {
        console.log("owner: %s maxcap: %s", msg.sender, cap);
        _mint(msg.sender, cap);
        transferOwnership(msg.sender);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        require(
            ERC20.totalSupply() + amount <= cap,
            "USDT: cap exceeded"
        );
        _mint(to, amount);
    }

    // Function to increment tap count
    function tap() public {
        taps[msg.sender]++;
    }

    // Function to check taps of a player
    function getTaps(address player) public view returns (uint) {
        return taps[player];
    }

    // Function to reward player after a certain number of taps
    function rewardPlayer(address player) public onlyOwner {
        require(taps[player] >= 10, "Not enough taps"); // Must have at least 10 taps
        payable(player).transfer(tapReward); // Reward player
        taps[player] = 0; // Reset taps after reward
    }

    // Owner can set the reward amount
    function setTapReward(uint newReward) public onlyOwner {
        tapReward = newReward;
    }
}