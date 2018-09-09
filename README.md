# ETHBerlin-Crypto-POS-Receipt

Hackers : Julien Béranger and Francois Branciard


Hacking an Epson P20 POS mobile printer Receipt for crypto

Alert : POS = Point of Sale not proof of stake ;)

## User stories

### Payment User story
As a customer, when I make a payment in real life, I want a paper receipt of my transaction as today. It's needed for accounting service.
Exemple :
- You will buy your coffee with crypto in Starbucks soon,
- Today Starbucks gives you a paper receipt for your fiat payment,
- Paper receipt for the crypto payment with the transaction you can then QR code to check.

### Smart Contract User story

Smart contract can design forms of interactions between users: Marketplace (bid/ask), Auctions, Ticketing. These specific new kinds of transactions will need paper receipts to
- details date, amount etc ...
- be tracked into existing accounting system for company or personal budget management.

For this point, we will take example of iExec Marketplace (computation ressources Marketplace) where a receipt of all the whole process can be printed, showing what the user has paid and what’s the workers’ reward for this off-chain computation.


### Property Receipt User story

If you attach ERC721 to real object in life that have value : Art, gold bar, supply chain etc ...
When you transfer the new ownership in real life by physically interactive with your client. The owner trigger the ERC721 transfer. This new previous owner gives the object and a receipt that shows the ERC721 transfer transaction.  
The new owner can check if the transaction is confirmed and if so, it can safely go away.

## PoC
We do PoC on the Property Receipt User story :

- The creator of the origami has create a ERC721 et mint a token for the origami cretaed.
- he put the token id on the paper object.
- The buyer pay for the object (fiat or crypto)
- The creator gives the object and the receipt of the new ownership to the buyer.
- The buyer do not go away until he has this receipt to be able to proove he his the owner and sell it to others.

More features to come :
- before buying the object, ask the seller (owner) to proove his current ownership of the ERC721 token. (signed some message)
- before selling to the new owner. ask the byer to confirmed his idendity to receive the ownertship. (signed some message)


We facing some issues with the printer drivers on mac. So we did not succeeded to do some code for the solution but we mock up the story and illustrate the Propery Receipt in this short video :

## When Mainnet ?
It is on [mainnet](https://etherscan.io/address/0x8adfe7afc049d2a10b2b715b1d1d138e3f1865be)  !! The token id 1 you see in the video is one record on this ERC721.

```
        Origami721: 0x8adfe7afc049d2a10b2b715b1d1d138e3f1865be
        ... 0x1758b2dbb3e14f9aead54d4fef6383f341285f592f94d40d99929c7abbb93d50
```
The current ower of this origami :

![part1](https://github.com/branciard/ETHBerlin-Crypto-POS-Receipt/blob/master/mainnet/currentOwner.png)



Mint has been closed. So this is a unique 1 item Collection !!! What is your offer for this beautiful origami ?

Token url is  associated to an [ipfs link](https://github.com/branciard/ETHBerlin-Crypto-POS-Receipt/blob/master/migrations/2_deploy_contracts.js#L15). It is a of the origami picture with the token id visible :

![part2](https://github.com/branciard/ETHBerlin-Crypto-POS-Receipt/blob/master/mainnet/QmQV992LRzKibKnoBKtzydwV1ZDr3EiuGUnXWaZvzeq3jt.jpg)




## how to build
```
npm i
truffle compile
truffle migrate
```
