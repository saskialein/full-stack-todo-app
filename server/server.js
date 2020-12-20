const express = require('express')
const path = require('path')
const toDoRoutes = require('./routes/toDoRoutes')

const server = express()

server.use(express.json())
server.use(express.static(path.join('server', 'public')))
server.use('/api/v1/tasks', toDoRoutes)


server.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


module.exports = server
