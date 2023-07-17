import express from "express";
import catalogRouter from './routes.js'
const PORT = '5005'

const app = express()

app.use(express.json())
app.use('/catalog',catalogRouter)

app.listen(PORT,()=>{
    console.log(`сервер запустился на ${PORT} порту`)
})