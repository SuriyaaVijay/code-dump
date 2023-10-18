// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
 error Voting__alreadyVoted();
 //revert is used instead of require to optimise gas consumption

// basic voting contract
contract Voting {
   
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }
    address public owner;
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action.");
        _;
    }

    mapping(uint => Candidate) public candidates;
    mapping(address => bool) public voters;

    uint public candidatesCount;

    constructor() {
        owner = msg.sender;
        addCandidate("Candidate 1");
        addCandidate("Candidate 2");
    }


    function addCandidate(string memory _name) public onlyOwner {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }

    function vote(uint _candidateId) public {
        if(voters[msg.sender]== true){
             revert Voting__alreadyVoted();
        }
        require(_candidateId > 0  && _candidateId <= candidatesCount, "Invalid candidate ID.");

        voters[msg.sender] = true;
        candidates[_candidateId].voteCount++;
    }
    function getVoteCount(uint256 _candidateId) public  view returns (uint256){
        return  candidates[_candidateId].voteCount ;
    }
}
