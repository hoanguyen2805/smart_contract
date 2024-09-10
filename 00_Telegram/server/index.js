require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const { Web3 } = require('web3');
const USDTAbi = require('./USDT.json'); // ABI của smart contract
const wallets = {}; // Biến lưu trữ địa chỉ ví của người chơi

// Thiết lập Web3
const web3 = new Web3(process.env.WEB3_PROVIDER_URL);
const contract = new web3.eth.Contract(USDTAbi, process.env.SMART_CONTRACT_ADDRESS);
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });
const owner = web3.eth.accounts.privateKeyToAccount(process.env.OWNER_PRIVATE_KEY);
web3.eth.accounts.wallet.add(owner);

// Lệnh cho người chơi đăng ký ví của họ
bot.onText(/\/setwallet (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const walletAddress = match[1]; // Ví dụ: /setwallet 0x123...

    // Kiểm tra địa chỉ ví hợp lệ (định dạng Ethereum)
    if (web3.utils.isAddress(walletAddress)) {
        wallets[msg.from.id] = walletAddress; // Lưu địa chỉ ví theo Telegram ID
        bot.sendMessage(chatId, `Wallet address set to: ${walletAddress}`);
    } else {
        bot.sendMessage(chatId, `Invalid wallet address.`);
    }
});

// Chức năng xử lý tap
bot.onText(/\/tap/, async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;

    // Kiểm tra xem người chơi đã đăng ký ví hay chưa
    if (!wallets[userId]) {
        bot.sendMessage(chatId, `Please set your wallet address using /setwallet <address>`);
        return;
    }

    const playerAddress = wallets[userId]; // Lấy địa chỉ ví của người chơi

    // Tương tác với Smart Contract - Gọi hàm tap
    try {
        await contract.methods.tap().send({ from: playerAddress });
        bot.sendMessage(chatId, `👍 You tapped!`);
    } catch (error) {
        console.error("Error tapping:", error);
        bot.sendMessage(chatId, `Error tapping!`);
    }
});

// Chức năng kiểm tra số lần tap
bot.onText(/\/mytaps/, async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;

    // Kiểm tra xem người chơi đã đăng ký ví hay chưa
    if (!wallets[userId]) {
        bot.sendMessage(chatId, `Please set your wallet address using /setwallet <address>`);
        return;
    }

    const playerAddress = wallets[userId]; // Lấy địa chỉ ví của người chơi

    // Lấy số lần tap từ Smart Contract
    try {
        const taps = await contract.methods.getTaps(playerAddress).call();
        bot.sendMessage(chatId, `You have ${taps} taps.`);
    } catch (error) {
        console.error("Error getting taps:", error);
        bot.sendMessage(chatId, `Error checking taps!`);
    }
});

// Chức năng phân phối phần thưởng
bot.onText(/\/reward/, async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;

    // Kiểm tra xem người chơi đã đăng ký ví hay chưa
    if (!wallets[userId]) {
        bot.sendMessage(chatId, `Please set your wallet address using /setwallet <address>`);
        return;
    }

    const playerAddress = wallets[userId];

    // Thực hiện giao dịch phân phối phần thưởng
    try {
        await contract.methods.rewardPlayer(playerAddress).send({
            from: owner.address,
            gas: 1000000,
        });
        bot.sendMessage(chatId, `🎉 Congratulations! You've been rewarded.`);
    } catch (error) {
        console.error("Error rewarding player:", error);
        bot.sendMessage(chatId, `Error rewarding player.`);
    }
});
