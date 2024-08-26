// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract NFTLabubu is ERC721Enumerable, ERC721URIStorage, Ownable {
    using SafeERC20 for IERC20;
    uint256 private _tokenIdCounter;
    IERC20 private token;

    struct NFT {
        uint256 id;
        address payable creator;
        uint256 price;
        bool forSale;
    }

    mapping(uint256 => NFT) public nfts;

    event SetToken(IERC20 _token);

    constructor(address initialOwner,  IERC20 _token) Ownable(initialOwner) ERC721("NFTLabubu", "LB") {
        token = _token;   
    }

    function setToken(IERC20 _token) public onlyOwner {
        token = _token;
        emit SetToken(_token);
    }

    function createNFT(string memory tokenURIString, uint256 price) public returns (uint256) {
        _tokenIdCounter += 1;
        uint256 newNFTId = _tokenIdCounter;

        _mint(msg.sender, newNFTId);
        _setTokenURI(newNFTId, tokenURIString);

        nfts[newNFTId] = NFT(newNFTId, payable(msg.sender), price, false);

        return newNFTId;
    }

    // cập nhật giá NFT
    function updateNFTPrice(uint256 nftId, uint256 price) public {
        require(ownerOf(nftId) == msg.sender, "Only the owner can update price");
        require(price > 0, "Price must be greater than 0");
        nfts[nftId].price = price;
    }


    // cập nhật NFT có thể bán hay không
    function updateNFTSale(uint256 nftId, bool is_sale) public {
        require(ownerOf(nftId) == msg.sender, "Only the owner can list the NFT for sale");
        nfts[nftId].forSale = is_sale;
    }

    function updateNFTPriceAndSale(uint256 nftId, uint256 price, bool is_sale) public {
        require(ownerOf(nftId) == msg.sender, "Only the owner can update price");
        require(price > 0, "Price must be greater than 0");
        nfts[nftId].price = price;
        nfts[nftId].forSale = is_sale;
    }

    // lấy ra thông tin của 1 NFT
    function getNFT(uint256 nftId) public view returns (NFT memory) {
        return nfts[nftId];
    }

    // get list nft
    function getListNFT() view public returns (NFT[] memory)  {
        NFT[] memory myNft = new NFT[](_tokenIdCounter);
       
        for( uint i = 0; i < _tokenIdCounter; i++)
        {
            myNft[i] = nfts[i + 1];
        }
        return myNft;
    }

    // lấy ra list tokenID của 1 account đang sở hữu
    function listTokenIds(address owner) external view returns (uint256[] memory tokenIds) {
        // balanceOf(owner) = số lượng token NFT mà account đang sở hữu
        uint256 balance = balanceOf(owner);
        uint256[] memory ids = new uint256[](balance);

        for( uint i = 0; i < balance; i++)
        {
            // tokenOfOwnerByIndex(owner, i) = trả về tokenID của NFT tại chỉ số i mà địa chỉ account sở hữu (1 account sẽ có 1 mảng chứa các tokenID mà nó đang sở hữu)
            ids[i] = tokenOfOwnerByIndex(owner, i);
        }
        return (ids);
    }

    function buyNFT(uint256 nftId) public payable {
        NFT memory nft = nfts[nftId];
        require(nft.forSale, "NFT is not for sale");
        require(msg.value >= nft.price, "Not enough ether to purchase this NFT");

        address seller = ownerOf(nftId);

        // Transfer NFT to buyer
        _transfer(seller, msg.sender, nftId);

        // Mark as not for sale
        nfts[nftId].forSale = false;

        // Transfer funds to the seller
        payable(seller).transfer(msg.value);
    }

    function buyNFTByUSDT(uint256 nftId, uint256 USDTAmount) external {
        NFT memory nft = nfts[nftId];
        require(nft.forSale, "NFT is not for sale");
        require(USDTAmount >= nft.price, "Not enough ether to purchase this NFT");
        //kiểm tra còn đủ USDT để mua không
        require(token.balanceOf(msg.sender) >= USDTAmount,"Insufficient account balance");
        address seller = ownerOf(nftId);

        // Transfer NFT to buyer
        _transfer(seller, msg.sender, nftId);

        // Mark as not for sale
        nfts[nftId].forSale = false;

        SafeERC20.safeTransferFrom(token, msg.sender, seller, USDTAmount);
    }


    function _increaseBalance(address account, uint128 amount) internal virtual override(ERC721, ERC721Enumerable) {
        return super._increaseBalance(account, amount);
    }

    function _update(address to, uint256 tokenId, address auth) internal virtual override(ERC721, ERC721Enumerable) returns (address) {
        return super._update(to, tokenId, auth);
    }

    // tokenURI dùng để lấy metadata của mỗi token
    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721Enumerable, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}