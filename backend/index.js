const express = require('express')
const app = express()
const cookieParser=require('cookie-parser')
const authRouter=require('./src/auth-routes/auth-route.js')
const mongoose = require('mongoose')

app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
require('dotenv').config();

app.route('/auth',authRouter)
const port=process.env.PORT || 8000
const mongoURL=process.env.DATABASE_URL

mongoose
  .connect(mongoURL)
  .then(() => console.log("db connected"))
  .catch(() => console.log("error in db-connection"));

app.listen(port,()=>{

    console.log('server started')
})