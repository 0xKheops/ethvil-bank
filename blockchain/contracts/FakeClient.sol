//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./EvilBank.sol";

/*
    @notice contract used for testing EvilBank
    @dev used for testing failed tokens transfers
*/
contract FakeClient {

    // toggles if this contract allows tokens to be sent to it
    bool allowTokens = false;

    // @notice makes this contract place a bid in evilbank
    function bid(address payable _evilBank, uint _bid) public {
        EvilBank evilBank = EvilBank(_evilBank);
        evilBank.bid{value:_bid}();
    }

    // @notice used to test the withdraw() function from evilbank
    function withdraw(address payable _evilBank) public {
        EvilBank evilBank = EvilBank(_evilBank);
        allowTokens = true;
        evilBank.withdraw();
        allowTokens = false;
    }

    // @notice used by the test to fill tokens without revert
    function fill() payable public {

    } 

    // @notice function that receives tokens sent to this contract's address
    // @dev should revert except when executing the withdraw() function above
    receive() external payable {
        require(allowTokens, "I don't want your tokens, punk!");
    }
    
}