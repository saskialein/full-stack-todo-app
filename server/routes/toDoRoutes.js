const express = require('express')
const router = express.Router()

const { getTodos, createTask, updateTask, deleteTask } = require('../db/db.js')


// READ // GET LIST
router.get('/', (req, res) => {
    getTodos()
        .then(todos => {
            res.json(todos)
            //res.json means stringify the response & put it in JSON format so we can then deal with it this way
        })
        .catch(err => {
            console.log('catch', err)
            res.status(500).json({ message: 'Something broke' })
        })
})

// CREATE (Single Resource)
router.post('/', (req, res) => {
    const newTask = req.body
    createTask(newTask)
        .then( id => {
            res.json({id: id})
        // at this stage one bit of info we don't have is the auto generated id of the new task, which is why we're passing this back as the response 
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Something broke' })
        })
})

// UPDATE (Single Resource)
router.patch('/:id', (req, res) => {
    const id = req.params.id
    const updatedTask = req.body
    updateTask(id, updatedTask)
    // above line means I went to update pup by the id & updatedTask variables I've defined here
        .then( () => {
            res.json({})
            // sending back an empty body to the user as not really anything needed here for the user
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Something broke' })
        })
})

// DELETE (Single Resource)
router.delete('/:id', (req, res) => {
    const id = req.params.id
    deleteTask(id)
        .then( () => {
            res.json({})
            // signals to the browser / client that the previous function has been completed successfully & sends an empty body a response
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Something broke' })
        })
})

module.exports = router