require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const { SERVER_PORT } = process.env
const { seed } = require('./seed.js')
const { createNewLog, getPastLogs } = require('./controller.js')

const port = process.env.PORT || 4000
const path = require('path')

app.use(express.json())
app.use(cors())

app.use(express.static('public'))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/newLog.html'))
})

// DEV
app.post('/seed', seed)

// GET PAST LOGS
app.get('/past-logs', getPastLogs)

// CREATE NEW LOG
// app.post('/pain-logs', createNewLog)

// UPDATE PAIN LOG
// app.put('/pain-logs:id', updateLog)

// DELETE PAIN LOG
// app.delete('/pain-logs:id', deleteLog)

app.listen(SERVER_PORT, () => console.log(`server running on ${SERVER_PORT}`))
