require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const { SERVER_PORT } = process.env
const { seed } = require('./seed.js')
// const { createNewPainLog, getPainLogs } = require('./controller.js')

const port = process.env.PORT || 4000
const path = require('path')

app.use(express.json())
app.use(cors())

app.use(express.static('public'))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

// DEV
app.post('/seed', seed)
app.get('/pain-logs', (req, res) => {
    res.status(200).send()
})

// CREATE NEW PAIN LOG
// app.post('/pain-logs', createNewPainLog)

// GET ALL PAIN LOGS
// app.get('/pain-logs', getPainLogs)

// UPDATE PAIN LOG
// app.put('/pain-logs:id', updatePainLog)

// DELETE PAIN LOG
// app.delete('/pain-logs:id', deletePainLog)

app.listen(SERVER_PORT, () => console.log(`server running on ${SERVER_PORT}`))
