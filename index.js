import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
const PORT = process.env.PORT
const app = express()
app.use(cors())

app.use('/', (req, res) => {
    res.status(200).send(`<h1>Express running successfully</h1>`)
})

app.listen(PORT, ()=>console.log(`server listening ${PORT}`))
