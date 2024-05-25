const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/connectDB')
const router = require('./routes/index')
const cookiesParser = require('cookie-parser')
const { app, server } = require('./socket/index')
const allowCorsError = require('./cors')

// const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(allowCorsError)

// app.use(cors({
//     origin: ["https://classy-chat-frontend.vercel.app"],
//     methods: ["POST", "GET", "PUT"],
//     credentials: true,
//     allowedHeaders: 'Content-Type,Authorization',
// }))

app.use(cookiesParser())

const PORT = process.env.PORT || 8080

app.get('/', (request, response) => {
    response.json({
        message: "Server running at " + PORT
    })
})

// api endpoints
app.use('/api', router)

connectDB().then(() => {
    server.listen(PORT, () => {
        console.log("server running at " + PORT)
    })
})
