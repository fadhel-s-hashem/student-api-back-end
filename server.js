// server.js

require('dotenv').config()

const dns = require("node:dns");

dns.setServers(["8.8.8.8", "1.1.1.1"])

const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors') // new one

// the import for conttrolers
const studentCtrl = require('./controllers/students.js')

const app = express()

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name} 🥭`)
})

// this line allows our React Front End permission to connect to our backend
app.use(cors({ origin: 'http://localhost:5173' })) // new one

app.use(express.json())// also new
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Students API' })
})

app.post('/students', studentCtrl.create )
app.get('/students', studentCtrl.index)
app.get('/students/:studentId', studentCtrl.show)
app.put('/students/:studentId', studentCtrl.update)
app.delete('/students/:studentId', studentCtrl.deleteStudent)



const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`The express app is running on port ${port}`)
})
