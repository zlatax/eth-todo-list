var TodoList = artifacts.require("TodoList");

module.exports = function(deployer) {
  deployer.deploy(TodoList);
};

/* when deploying a smart contract to the blockchain, 
we change the state, therefore we need to somehow update
the state using migrations*
- think of blockchains as a database
The numbers represent the order truffle will run the migrations
to make the meta changes to the blockchain
*/

/*
Deploying smart contracts requires fees (The first wallet is deducted)*/