pragma solidity >=0.4.22 <0.9.0;

contract TodoList {
	//state varaibles
	uint public taskCount = 0;

	struct Task {
		uint id;
		string content;
		bool completed;
	}

	mapping(uint => Task) public tasks;

	event TaskCreated (
		uint id,
		string content,
		bool completed
	);

	// similar to __init__ to add default functions when instantiated
	constructor() public {
		createTask("watch lectures!");
	}

	function createTask(string memory _content) public {
		taskCount++;
		tasks[taskCount] = Task(taskCount,_content, false);
		emit TaskCreated(taskCount, _content, false);
	}

}

