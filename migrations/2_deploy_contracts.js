var Origami721 = artifacts.require("./Origami721.sol");


module.exports = function(deployer) {

  let ownerOfTheOrigami = '0x6c6558dab14054d950bde08a659d4a9af113b243';
  deployer.then(async() => {

    await deployer.deploy(Origami721, "ORIGAMI721", "ORI");

    let origami721Instance = await Origami721.deployed();

    await origami721Instance.mintWithTokenURI(ownerOfTheOrigami, 1,"/ipfs/QmQV992LRzKibKnoBKtzydwV1ZDr3EiuGUnXWaZvzeq3jt");

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
