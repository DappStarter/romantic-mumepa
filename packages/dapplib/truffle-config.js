require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remember push hope clog blue gauge'; 
let testAccounts = [
"0x8417530367e1e3ad2af2b3c448f7b8e3cdd51fa6423c0a57153b0932a53fa3e4",
"0x3db4b6d447d62a778680b46de095208374ae97006245eeccf2da6045f0a420dd",
"0xa567adfcfb3ead301b3e41ba9ac25b0be7947f49d44c331aa3166751922e0f37",
"0x814592e89d09dfceb05c979433c7139eb4fd046c7b50b7d0d6a4bbbc1fff18c0",
"0x171a0d17fba3f1c9dbd36777634ab20604cdd11efb77a264e9a1c37f4ec27b8b",
"0xce44c19ae9aa7713d918913fb023d4d21c13e70ebe05235699d8b6fa6cd7aab4",
"0xe5fb5f3f615c85c9e59d2428e2c32666f04216ae8f7135e1b4f9866b79df1533",
"0x0db33bef03a6df296916f5636e7443723afb8e143b8ad35f71778f60c10d4473",
"0x56604abedf1ea8c94219109021d00ed892925372a183d3eac26c493e6c0823a0",
"0x977b209f6e3a492b9a0f2eed954fbca1db99026de4a915bd9845fa395be0b8c6"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
