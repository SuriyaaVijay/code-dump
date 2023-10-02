// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract TodoList {
    struct TaskItem {
        string task;
        bool isCompleted;
    }
    uint256 public count = 0;
    mapping(uint256 => TaskItem) public tasks;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(owner == msg.sender, "You can't call this function");
        _;
    }

    function addTask(string calldata task) public onlyOwner {
        TaskItem memory item = TaskItem({task: task, isCompleted: false});
        tasks[count] = item;
        count++;
    }

    function completeTask(uint256 id) public onlyOwner {
        require(!tasks[id].isCompleted, "Task already completed");
        tasks[id].isCompleted = true;
    }
}
