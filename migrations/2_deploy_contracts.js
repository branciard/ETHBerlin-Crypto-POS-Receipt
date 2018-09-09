var Origami721 = artifacts.require("./Origami721.sol");


module.exports = function(deployer) {

  let ownerOfTheOrigami = '0x6c6558dab14054d950bde08a659d4a9af113b243';
  deployer.then(async() => {
    var waitUntil = new Date().getTime() + 20*1000;
   while(new Date().getTime() < waitUntil) true;
    await deployer.deploy(Origami721, "ORIGAMI721", "ORI");
    var waitUntil = new Date().getTime() + 20*1000;
   while(new Date().getTime() < waitUntil) true;
    let origami721Instance = await Origami721.deployed();

    await origami721Instance.mintWithTokenURI(ownerOfTheOrigami, 1,"/ipfs/QmQV992LRzKibKnoBKtzydwV1ZDr3EiuGUnXWaZvzeq3jt");
    var waitUntil = new Date().getTime() + 20*1000;
   while(new Date().getTime() < waitUntil) true;
    let currentOwner = await origami721Instance.ownerOf(1);
    console.log("currentOwner:" + currentOwner);
    let mintingFinished = await origami721Instance.mintingFinished();
    console.log("minting is finish : " + mintingFinished);
    await origami721Instance.finishMinting();
    let mintingFinished2 = await origami721Instance.mintingFinished();
    console.log("minting is finish :" + mintingFinished2);
    let tokenURI = await origami721Instance.tokenURI(1);
    console.log("tokenURI :" + tokenURI);
  })
}
