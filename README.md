# Generate ETH wallet using Node js 
Generate an Ethereum wallet using node, we can use the ethers.js library.

This library provides a simple and powerful way to interact with the Ethereum blockchain, including the generation of wallets. 

This code generates secure Ethereum wallets with the key information needed to manage and recover them. 

The generated wallet details are stored in an array and then written to the file in a formatted manner. 

After generating all the wallets, the script saves the address, mnemonic, and private key for each wallet to wallet.txt file.
## Installation:
### First download ETH wallet Generator or clone it
1. Clone the repository: **`git clone https://github.com/mascrypt0/0xbaae099935769FD77FF21dFf915765f71BA71970.git`**
2. Navigate to the project directory: **`cd 0xbaae099935769FD77FF21dFf915765f71BA71970`**
3. Install dependencies: **`npm install`**
4. If you facing any error try to install dependencies manually

**`npm install ethers`**

**`npm install readline-sync`**

Start the project: **`node index.js`**

You may use this project as desired

### How It Works: ###
The ethers.Wallet.createRandom() function generates a random Ethereum wallet with a public address, mnemonic (12-word seed phrase), and private key.

The script asks the user how many wallets to generate and outputs the address, mnemonic, and private key for each wallet.

The program loops through generating the requested number of wallets, displaying the results in the console.

After generating the wallets, the user is prompted to either generate more wallets or exit.
