const express = require('express')
const dotenv = require('dotenv')
dotenv.config({ path: './config/config.env' })

const router = require('./routes/todos')
const connectDB = require('./config/db')

const app = express()
const PORT = process.env.PORT || 5000

connectDB()

app.use(express.json())
app.use(router)

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on PORT:${PORT}`))