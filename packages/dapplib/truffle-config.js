require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note museum unique grace cricket sudden gate'; 
let testAccounts = [
"0x34817cb184d077475a4f8950ef7082fa4668babd309407a46b05e3151566c803",
"0xe5f5958adebed8b7ac9b80895b507cd97884184be85604224d2f1cd0bdb36b7c",
"0xa5ba2af9c9a4cc21b0338a6e4a7d0b7eda7c9e6b328db7f8ababd65dd0a0e0d6",
"0x64227c52c74c331ed47d26a7c10ec452e85141442d7eedc7f765a0fe70f86450",
"0xaf90f3e25abc1c95ae669865ff572c05ce9e342596e11b50f9c9afec14eb2c4f",
"0xfe44d9d0f6a2e4ecba9a95b75b2a7eb7052579a1846211b04a4a9f3e5c59ae53",
"0x0034f236b0f40c9eeef0ab9f18947f4d31675ef8dd418cd7a652e34f88de8f48",
"0x213bab524f4fb565ed224014fa4eeccad8c42ca82bbf399747aed9f44ea9e7ce",
"0x4984309a440b92597debe1d078df80ee0818edab03a9e09abc63d54c5663117a",
"0x2ad11e01fd8482d28375296a3674d003e2f84c7dc97c479d5eb4407ecef1b9e6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

