require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const { SERVER_PORT } = process.env
const { addNewLog, getPastLogs } = require('./controller')

const path = require('path')

app.use(express.json())
app.use(cors())

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

const port = process.env.PORT || 4000

app.listen(port, () => console.log(`server running on ${port}`))
