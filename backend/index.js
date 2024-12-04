const express = require('express')
const app = express()
const cookieParser=require('cookie-parser')
const authRouter=require('./src/auth-routes/auth-route.js')
const mongoose = require('mongoose')

app.use(express.urlencoded({extended:false}))
app.use(cookieParser())

app.route('/auth',authRouter)


mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => console.log("db connected"))
  .catch(() => console.log("error in db-connection"));

app.listen(8001,()=>{

    console.log('server started')
})