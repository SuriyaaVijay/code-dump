// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VotingSystem {
    // Define the owner of the contract (administrator).
    address public owner;

    // Define the state of the voting process.
    enum VotingState { Registration, Voting, Ended }
    VotingState public votingState;

    // Define a struct to represent a candidate.
    struct Candidate {
        uint256 id;
        string name;
        string partyName;
        uint256 voteCount;
    }

    // Store the candidates.
    Candidate[] public candidates;

    // Create a mapping to store voters and their voting status.
    mapping(address => bool) public voters;

    // Events to log important contract actions.
    event CandidateAdded(uint256 indexed candidateId, string name, string partyName);
    event VoterRegistered(address indexed voter);
    event Voted(address indexed voter, uint256 candidateId);
    event VotingStateChanged(VotingState newState);

    // Modifier to ensure that only the contract owner can perform certain actions.
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    // Constructor to initialize the contract and set the owner.
    constructor() {
        owner = msg.sender;
        votingState = VotingState.Registration;
    }

    // Function to add a candidate with a party name.
    function addCandidate(string memory _name, string memory _partyName) public onlyOwner {
        uint256 candidateId = candidates.length;
        candidates.push(Candidate(candidateId, _name, _partyName, 0));
        emit CandidateAdded(candidateId, _name, _partyName);
    }

    // Function to register a voter.
    function registerVoter() public {
        require(votingState == VotingState.Registration, "Voting is not in the registration phase");
        require(!voters[msg.sender], "You are already registered");
        voters[msg.sender] = true;
        emit VoterRegistered(msg.sender);
    }

    // Function to start the voting phase.
    function startVoting() public onlyOwner {
        require(votingState == VotingState.Registration, "Voting has already started or ended");
        votingState = VotingState.Voting;
        emit VotingStateChanged(votingState);
    }

    // Function for voters to cast their votes.
    function vote(uint256 _candidateId) public {
        require(votingState == VotingState.Voting, "Voting is not currently allowed");
        require(voters[msg.sender], "You are not a registered voter");
        require(_candidateId < candidates.length, "Invalid candidate ID");

        candidates[_candidateId].voteCount++;
        emit Voted(msg.sender, _candidateId);
    }

    // Function to end the voting process and determine the winner.
    function endVoting() public onlyOwner {
        require(votingState == VotingState.Voting, "Voting has not started");
        votingState = VotingState.Ended;
        emit VotingStateChanged(votingState);
    }

    // Function to get the winner of the election.
    function getWinner() public view returns (string memory) {
        require(votingState == VotingState.Ended, "Voting has not ended yet");
        uint256 maxVoteCount = 0;
        uint256 winningCandidateId = 0;

        for (uint256 i = 0; i < candidates.length; i++) {
            if (candidates[i].voteCount > maxVoteCount) {
                maxVoteCount = candidates[i].voteCount;
                winningCandidateId = i;
            }
        }

        return candidates[winningCandidateId].name;
    }

    // Function to show all candidates and their party names.
    function showAllCandidates() public view returns (string[] memory, string[] memory) {
        string[] memory candidateNames = new string[](candidates.length);
        string[] memory partyNames = new string[](candidates.length);

        for (uint256 i = 0; i < candidates.length; i++) {
            candidateNames[i] = candidates[i].name;
            partyNames[i] = candidates[i].partyName;
        }

        return (candidateNames, partyNames);
    }
}
