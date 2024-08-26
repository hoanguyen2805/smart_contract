var web3 = new Web3(window.ethereum);
var contract;
var contractUSDT;
var account = null;
const contractAddress = "0x8Eb4268D2571E67310ddc85AEC465d0C48A19EdF";
const contractUSDTAddress = "0xE5D167112E59Ff101f61C42EA361157669477C90";
// $.LoadingOverlay("show");
// $.LoadingOverlay("hide");
$('#nftModal').on('show.bs.modal', function (event) {
    // Nút kích hoạt modal
    var button = event.relatedTarget;
    
    // Lấy dữ liệu từ các thuộc tính data-* của nút
    var id = button.getAttribute('data-id');
    var price = button.getAttribute('data-price');
    var sale = button.getAttribute('data-sale');
    
    $('#nftModalLabel').text(`NFT ID: ${id}`);
    $('#input-id').val(id);
    $('#input-price').val(price);
    if (sale == "true") {
        $('#input-for-sale').prop('checked', true);
    } else {
        $('#input-for-sale').prop('checked', false);
    }
    
});

$('#btn-update-nft').click(async function() {
    var id = $('#input-id').val();
    var price = $('#input-price').val();
    var sale = $('#input-for-sale').prop('checked');
    if (price <= 0) {
        alert('Enter price greater than 0');
        return;
    }
    $.LoadingOverlay("show");
    try {
        await updatePrice(id, price);
        await updateForSale(id, sale);
    } catch (e) {
        console.log(e);
    }
    $('#nftModal').modal('hide');
    await renderMyNFT();
    $.LoadingOverlay("hide");
})

async function updatePrice(tokenId, price) {
    // try{
        // $.LoadingOverlay("show");
        await contract.methods.updateNFTPrice(tokenId, web3.utils.toWei(price, 'ether')).send({
            'from': account
        });
    // } catch(e) {
        // console.log(e);
    // }
    // $('#nftModal').modal('hide');
    // await renderMyNFT();
    // $.LoadingOverlay("hide");
}

async function updateForSale(tokenId, sale) {
    await contract.methods.updateNFTSale(tokenId, sale).send({
        'from': account
    });
}

function shortenAddress(address) {
    const firstPart = address.slice(0, 4);
    const lastPart = address.slice(-4);
    return `${firstPart}...${lastPart}`;
}

function truncateToFourDecimals(str) {
    const strNumber = web3.utils.fromWei(str, 'ether');// Chuyển đổi số dư từ Wei sang Ether để dễ đọc.
    const index = strNumber.indexOf(".");
    if (index !== -1) {
        const decimalPart = strNumber.substring(index + 1, index + 5);
        const truncatedNumber = strNumber.substring(0, index + 5);

        // Kiểm tra nếu phần thập phân chỉ chứa số 0
        if (decimalPart === "0000") {
            return strNumber.substring(0, index); // Bỏ luôn phần thập phân
        }
        return truncatedNumber;
    }
    return strNumber; // Trường hợp chuỗi không có phần thập phân
}

async function buyNFTByUSDT(tokenId, price) {
    await contractUSDT.methods.approve(contractAddress, price).send({
        from: account,
    });
    // Tạo giao dịch mua
    await contract.methods.buyNFTByUSDT(tokenId, price).send({
        from: account
    })
        .on('transactionHash', function (hash) {
            console.log("Transaction Hash:", hash);
        })
        .on('receipt', function (receipt) {
            console.log("Transaction was mined successfully:", receipt);
        })
        .on('error', function (error) {
            console.error("Error buying NFT:", error);
        });
}

async function buyNFT(id, price) {
    if (account) {
        buyNFTByUSDT(id, price)
    } else {
        await connectWallet();
        await buyNFTByUSDT(id, price);
    }
}

async function connectWallet() {
    if (window.ethereum) {
        try {
            // get address wallet
            await window.ethereum.request({ method: "eth_requestAccounts" });
            const accounts = await web3.eth.getAccounts();
            account = accounts[0];
            $('#btn-connect-wallet').text(shortenAddress(account));
            $('#btn-connect-wallet').attr('title', account);
            //get balance
            contract = new web3.eth.Contract(contractABI, contractAddress);
            contractUSDT = new web3.eth.Contract(contractUsdtABI, contractUSDTAddress);
            await getBalanceBNB();
            await getBalanceUSDT();
            $('#table-balance').removeClass('d-none');
            renderNFTSale();
            renderMyNFT();
            
        } catch (error) {
            console.error("User denied account access", error);
        }
    } else {
        alert("No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.");
    }
}

async function getBalanceBNB() {
    await web3.eth.getBalance(account).then(balance => {
        $('#balance-bnb').text(truncateToFourDecimals(balance));
    });
}
async function getBalanceUSDT() {
    const balance = await contractUSDT.methods.balanceOf(account).call();
    $('#balance-usdt').text(truncateToFourDecimals(balance));
}

async function getTokenMetadata(tokenId) {
    const contractNFT = new window.web3.eth.Contract(contractABI, contractAddress);
    const tokenURI = await contractNFT.methods.tokenURI(tokenId).call();
    return `${tokenURI}`;
}

async function getAnNFT(tokenId) {
    const token = await contract.methods.getNFT(tokenId).call();
    return token;
}

async function getMyNFT() {
    var tokens = [];
    if (account) {
        tokens = await contract.methods.listTokenIds(account).call();
    }
    return tokens;
}

async function getOwnerNFT(tokenId) {
    const addressOwner = await contract.methods.ownerOf(tokenId).call();
    return addressOwner;
}

async function renderMyNFT() {
    var str = "";
    $('#my-nft').empty();
    const listIdNFT = await getMyNFT();
    for (let i = 0; i < listIdNFT.length; i++) {
        const img = await getTokenMetadata(listIdNFT[i]);
        const nft = await getAnNFT(listIdNFT[i]);
        str += `
        <div class="col-lg-4 col-md-12 mb-4">
            <div class="bg-image hover-zoom ripple shadow-1-strong rounded" style="position: relative">
                <img src="${img}" style="width: 100%; height: 200px; object-fit: cover"/>
                <a href="#!">
                    <div class="mask" style="background-color: rgba(0, 0, 0, 0.3); position: relative">
                        <div class="d-flex justify-content-between align-items-baseline">
                            <h5 style="margin-left: 10px">
                                <span class="badge bg-body-tertiary text-dark" style="background: white">Price: ${web3.utils.fromWei(nft.price, 'ether')} USDT</span>
                            </h5>
                            <button class="btn btn-primary mr-2"
                                style="margin: 10px;" data-bs-toggle="modal" data-bs-target="#nftModal" data-id="${listIdNFT[i]}" data-price="${web3.utils.fromWei(nft.price, 'ether')}" data-sale="${nft.forSale}"
                            >
                                Edit
                            </button>
                        </div>
                        <button style="position: absolute; top: -31px" class="btn ${nft.forSale ? 'btn-danger' : 'btn-success'} btn-sm">${nft.forSale ? 'For Sale' : 'Not For Sale'}</button>
                    </div>
                    <div class="hover-overlay">
                        <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                    </div>
                </a>
                <button style="position: absolute; top: 0px" class="btn btn-secondary btn-sm">ID: ${listIdNFT[i]}</button>
            </div>
        </div>
        `
    }
    $('#my-nft').append(str);
}

async function renderNFTSale() {
    var str = "";
    $('#nft-sale').empty();
    const contractNFT = new window.web3.eth.Contract(contractABI, contractAddress);
    const list = await contractNFT.methods.getListNFT().call();
    for (let i = 0; i < list.length; i++) {
        if (list[i].forSale) {
            const img = await getTokenMetadata(list[i].id);
            if (account) {
                const addressOwnerNFT = await getOwnerNFT(list[i].id);
                if (account == addressOwnerNFT) {
                    continue;
                }
            }
            str += `
            <div class="col-lg-4 col-md-12 mb-4">
                <div class="bg-image hover-zoom ripple shadow-1-strong rounded" style="position: relative">
                    <img src="${img}" style="width: 100%; height: 200px; object-fit: cover"/>
                    <a href="#!">
                        <div class="mask" style="background-color: rgba(0, 0, 0, 0.3);">
                            <div class="d-flex justify-content-between align-items-baseline">
                                <h5 style="margin-left: 10px;">
                                    <span class="badge bg-body-tertiary text-dark" style="background: white">Price: ${web3.utils.fromWei(list[i].price, 'ether')} USDT</span>
                                </h5>
                                <button class="btn btn-primary mr-2" style="margin: 10px;" onclick="buyNFT(${list[i].id}, ${list[i].price})">Buy</button>
                            </div>
                        </div>
                        <div class="hover-overlay">
                            <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                        </div>
                    </a>
                    <button style="position: absolute; top: 0px" class="btn btn-secondary btn-sm">ID: ${list[i].id}</button>
                </div>
            </div>
            `
        }
    }
    $('#nft-sale').append(str);
}

$(document).ready(function () {

    function initData() {
        // connectWallet();
        renderNFTSale();
    }

    initData();

    $('#btn-connect-wallet').click(async function () {
        await connectWallet();
    })
});