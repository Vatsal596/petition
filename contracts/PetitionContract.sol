// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Petition {
    // Structure for storing petition information
    struct PetitionInfo {
        string title;
        string description;
        address creator;
        address[] signatures;
    }

    // Array of all petitions
    PetitionInfo[] public petitions;

    // Function to create a new petition
    function createPetition(string memory _title, string memory _description) public {
        PetitionInfo memory newPetition = PetitionInfo({
            title: _title,
            description: _description,
            creator: msg.sender,
            signatures: new address[](0)
        });
        petitions.push(newPetition);
    }

    // Function to sign a petition
    function signPetition(uint _petitionIndex) public {
        PetitionInfo storage petition = petitions[_petitionIndex];
        require(!isSigned(petition.signatures, msg.sender), "You have already signed this petition.");
        petition.signatures.push(msg.sender);
    }

    // Function to check if an address has already signed a petition
    function isSigned(address[] memory _signatures, address _address) private pure returns (bool) {
        for (uint i = 0; i < _signatures.length; i++) {
            if (_signatures[i] == _address) {
                return true;
            }
        }
        return false;
    }

    // Function to get information about a specific petition
    function getPetition(uint _petitionIndex) public view returns (string memory, string memory, address, uint) {
        PetitionInfo storage petition = petitions[_petitionIndex];
        return (petition.title, petition.description, petition.creator, petition.signatures.length);
    }

    // Function to get the number of petitions
    function getPetitionCount() public view returns (uint) {
        return petitions.length;
    }
}