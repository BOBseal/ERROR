// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Blog {
    address public owner;
    uint public postCounter;

    mapping(uint => address) public authorOf;
    mapping(address => uint) public postsOf;
    mapping(uint => bool) public postsExist;

    enum Deactivated {
        NO,
        YES
    }

    struct PostStruct {
        uint id;
        string title;
        string description;
        string authorName;
        address author;
        Deactivated deleted;
        uint created;
        uint updated;
    }

    PostStruct[] activePosts;
    PostStruct[] inactivePosts;

    event Action(
        uint id,
        string actionType,
        address indexed executor,
        uint timestamp
    );

    modifier ownerOnly() {
        require(msg.sender == owner, "Reserved for owners only");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function createPost(
        string memory title,
        string memory authorName,
        string memory description
    ) public returns (bool) {
        require(bytes(title).length > 0, "Title cannot be empty");
        require(bytes(description).length > 0, "Description cannot be empty");
        require(bytes(authorName).length >0 ,"Set Author Name");

        postCounter++;
        authorOf[postCounter] = msg.sender;
        postsOf[msg.sender]++;
        postsExist[postCounter] = true;

        activePosts.push(
            PostStruct(
                postCounter,
                title,
                authorName,
                description,
                msg.sender,
                Deactivated.NO,
                block.timestamp,
                block.timestamp
            )
        );

        emit Action(postCounter, "POST CREATED", msg.sender, block.timestamp);

        return true;
    }

    function updatePost(
        uint id,
        string memory title,
        string memory description
    ) public returns (bool) {
        require(postsExist[id], "Blog post not found");
        require(bytes(title).length > 0, "Title cannot be empty");
        require(bytes(description).length > 0, "Description cannot be empty");
        require(
            msg.sender == activePosts[id - 1].author,
            "Reserved for author only"
        );

        activePosts[id - 1].title = title;
        activePosts[id - 1].description = description;
        activePosts[id - 1].updated = block.timestamp;

        emit Action(id, "POST UPDATED", msg.sender, block.timestamp);

        return true;
    }

    function deletePost(uint id) public returns (bool) {
        require(postsExist[id], "Blog post not found");
        require(
            msg.sender == activePosts[id - 1].author,
            "Reserved for author only"
        );

        activePosts[id - 1].deleted = Deactivated.YES;
        postCounter--;

        emit Action(id, "POST DELETED", msg.sender, block.timestamp);

        return true;
    }

    function restorePost(uint id) public ownerOnly returns (bool) {
        require(postsExist[id], "Blog post not found");
        require(
            msg.sender == activePosts[id - 1].author,
            "Reserved for author only"
        );

        activePosts[id - 1].deleted = Deactivated.NO;
        postCounter++;

        emit Action(id, "POST RESTORED", msg.sender, block.timestamp);

        return true;
    }

    function showPost(uint id) public view returns (PostStruct memory) {
        return activePosts[id - 1];
    }

    function getActivePosts() public view returns (PostStruct[] memory posts) {
        posts = new PostStruct[](postCounter);

        for (uint i = 0; i < activePosts.length; i++) {
            if (activePosts[i].deleted != Deactivated.YES) {
                posts[i] = activePosts[i];
            }
        }

        return posts;
    }
}