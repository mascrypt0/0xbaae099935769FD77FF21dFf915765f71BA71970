# Generate ETH wallet using npm js 
Generate an Ethereum wallet using npm, we can use the ethers.js library. 
This library provides a simple and powerful way to interact with the Ethereum blockchain, including the generation of wallets. 
This code generates secure Ethereum wallets with the key information needed to manage and recover them. 
The generated wallet details are stored in an array and then written to the file in a formatted manner. 
After generating all the wallets, the script saves the address, mnemonic, and private key for each wallet to wallet.txt file.
## Installation:
### First download ETH wallet Generator or clone it
--
1. Clone the repository: **`git clone https://github.com/username/project-title.git`**
2. Navigate to the project directory: **`cd project-title`**
3. Install dependencies: **`npm install`**
4. Build the project: **`npm run build`**
5. Start the project: **`npm start`**
npm init -y
npm install ethers
npm install readline-sync
