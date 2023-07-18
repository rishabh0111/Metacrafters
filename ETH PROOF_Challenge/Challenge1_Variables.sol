// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract SimpleContract {
    uint256 public myUint;
    bool public myBool;
    string public myString;
    address public myAddress;

    function setMyUint(uint256 newValue) public returns (uint256) {
        myUint = newValue;
        return myUint;
    }

    function getMyUint() public view returns (uint256) {
        return myUint;
    }

    function setMyBool(bool newValue) public returns (bool) {
        myBool = newValue;
        return myBool;
    }

    function getMyBool() public view returns (bool) {
        return myBool;
    }

    function setMyString(string memory newValue) public returns (string memory) {
        myString = newValue;
        return myString;
    }

    function getMyString() public view returns (string memory) {
        return myString;
    }

    function setMyAddress(address newValue) public returns (address) {
        myAddress = newValue;
        return myAddress;
    }

    function getMyAddress() public view returns (address) {
        return myAddress;
    }
}
