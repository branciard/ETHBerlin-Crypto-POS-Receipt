pragma solidity ^0.4.24;

import "./ERC721Mintable.sol";

contract Origami721 is ERC721Mintable {
  constructor(string name, string symbol) ERC721Mintable(name, symbol)
    public
  {
  }
}
