/* mocha testing*/

const TodoList = artifacts.require('./TodoList.sol')
var assert = require('assert')

contract ('TodoList',(accounts) => {
    before(async () => {
        this.todoList = await TodoList.deployed()
    })

    it('deploys successfully', async() => {
        const address = await this.todoList.address
        assert.notEqual(address,0x0)
        assert.notEqual(address,'')
        assert.notEqual(address, null)
        assert.notEqual(address, undefined)
    })

    it('list tasks', async() => {
        const taskCount = await this.todoList.taskCount()
        const task = await this.todoList.tasks(taskCount)
        assert.equal(task.id.toNumber(),taskCount.toNumber())
        assert.equal(task.content, "watch lectures!")
        assert.equal(task.completed, false)
        assert.equal(taskCount, 1)

    })

    it('creates tasks', async()=> {
        const result = await this.todoList.createTask('A new task')
        const taskCount = await this.todoList.taskCount()
        assert.equal(taskCount, 2)
        const event = result.logs[0].args
        assert.equal(event.id.toNumber(),taskCount)
        assert.equal(event.content, 'A new task')
        assert.equal(event.completed, false)
        console.log(event)
    })
})