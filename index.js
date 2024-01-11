import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
// import AppRoutes from './src/routes/index.js'
import userRoutes from './src/routes/user.js'
dotenv.config()
const PORT = process.env.PORT
const app = express()


app.use(cors())
app.use(express.json())


app.use('/api', userRoutes)

app.listen(PORT, ()=>console.log(`server listening ${PORT}`))
