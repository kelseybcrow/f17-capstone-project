require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const { createNewPainLog, getPainLogs } = require('./controller')

const port = process.env.PORT || 4000
const path = require('path')

app.use(express.json())
app.use(cors())

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

// CREATE NEW PAIN LOG

app.post('/pain-logs', createNewPainLog)

// GET PAIN LOGS
app.get('/pain-logs', getPainLogs)

app.listen(port, () => console.log(`server running on ${port}`))
