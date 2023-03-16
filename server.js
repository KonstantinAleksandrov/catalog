import express from "express";
import catalogRouter from './routes.js'


const app = express()

app.use(express.json())
app.use('/catalog',catalogRouter)

app.listen('5000',()=>{
    console.log('сервер запустился на 5000 порту')
})