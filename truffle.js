var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "12 words";
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    mainnet: {
      provider: new HDWalletProvider(mnemonic, "KEY INFURA"),
      network_id: "1"
      /*
      Using network 'mainnet'.

      Running migration: 1_initial_migration.js
        Deploying Migrations...
        ... 0xba5b19cc06778fa9388a3c441db9ebd1252ff0b13068effaf31c81506d31e585
        Migrations: 0x09bce0a1b3dd148fcbb9ca05d345d45c56b7c825
      Saving successful migration to network...
        ... 0xd9bb9c670b371e071e4d2319ad466868677c68c07f78bf6dbd511713bc4ba728
      Saving artifacts...
      Running migration: 2_deploy_contracts.js
        Running step...
        Deploying Origami721...
        ... 0x2b3e549ff4a9dd35fe6e5c4cd887fb1b3c699a6c6010d2cbb7f4ba427f8ce5c1
        Origami721: 0x8adfe7afc049d2a10b2b715b1d1d138e3f1865be
        ... 0x1758b2dbb3e14f9aead54d4fef6383f341285f592f94d40d99929c7abbb93d50
      currentOwner:0x6c6558dab14054d950bde08a659d4a9af113b243
      minting is finish : false
        ... 0x446c33770e9dbe2221ab7880b4c13859d2de041b811be2206ac50c54f3d5ccfb
      minting is finish :true
      tokenURI :/ipfs/QmQV992LRzKibKnoBKtzydwV1ZDr3EiuGUnXWaZvzeq3jt
      Saving successful migration to network...
        ... 0x66aa707f78d23380528ec48fa97b05cf96ce1ef93f990d0711f0fe83524ad427
      Saving artifacts...
      */
    },
  }
};
