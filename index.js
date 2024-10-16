// Import required libraries
const ethers = require('ethers');
const readline = require('readline-sync');
const fs = require('fs');

// Function to create an Ethereum wallet
function createWallet() {
    let wallet = ethers.Wallet.createRandom();
    return {
        address: wallet.address,
        mnemonic: wallet.mnemonic.phrase,
        privateKey: wallet.privateKey
    };
}

// Function to save the wallet details to a file
function saveWalletToFile(wallets) {
    const fileName = 'wallet.txt';
    let data = '';

    wallets.forEach((wallet, index) => {
        data += `Wallet ${index + 1}:\n`;
        data += `- Address: ${wallet.address}\n`;
        data += `- Mnemonic: ${wallet.mnemonic}\n`;
        data += `- Private Key: ${wallet.privateKey}\n`;
        data += '-----------------------------\n';
    });

    // Write data to wallet.txt
    fs.writeFileSync(fileName, data);
    console.log(`Wallets saved to ${fileName}\n`);
}

// Function to create multiple wallets based on user input
function generateWallets() {
    let walletCount = readline.questionInt('How many wallets would you like to create? ');
    console.log(`\nGenerating ${walletCount} wallet(s)...\n`);

    let wallets = [];

    for (let i = 1; i <= walletCount; i++) {
        let wallet = createWallet();
        wallets.push(wallet);
        console.log(`Wallet ${i}:`);
        console.log(`- Address: ${wallet.address}`);
        console.log(`- Mnemonic: ${wallet.mnemonic}`);
        console.log(`- Private Key: ${wallet.privateKey}`);
        console.log('-----------------------------');
    }

    // Save the generated wallets to wallet.txt
    saveWalletToFile(wallets);
}

// Main function to run the wallet generator
function main() {
    console.log("----- Ethereum Wallet Generator -----");
    generateWallets();

    // Ask the user if they want to generate more wallets
    let again = readline.question('Do you want to generate more wallets? (yes/no): ').toLowerCase();
    if (again === 'yes') {
        main(); // Repeat the process if user wants more wallets
    } else {
        console.log("Exiting... Goodbye!");
    }
}

// Run the program
main();
