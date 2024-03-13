// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract IssueTracker {
    struct Issue {
        string title;
        string description;
        string owner;
    }

    mapping(string => Issue) public issues;

    event IssueCreated(string title, string description, string owner);

    function createIssue(
        string memory id,
        string memory _title,
        string memory _description,
        string memory _owner
    ) external {
        issues[id] = Issue(_title, _description, _owner);
        emit IssueCreated(_title, _description, _owner);
    }
}
