// set up the dependencies. Add in the port, express, routes and listener
require("dotenv").config()


// Pull the PORT from .env 
const {PORT} = process.env

// get PORT from .env 
const express = require("express")

// create an application object 
const app = express()

// import cors 
const cors = require('cors')

//import bcrypt
const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser')
// const session = require('express-session')




// Middleware
app.use(cors()) // this will prevent the cors errors and allow us to open access to all origins. An origin can be anything like localhost, heroku, etc
app.use(express.urlencoded({extended:true})) // allow us to get req.body
app.use(cookieParser())
app.use(express.json()) // parse json
// app.use(
//     session({
//       key: '_id',  
//       secret: process.env.SECRET, 
//       resave: false, 
//       saveUninitialized: false,
//       cookie: {
//         sameSite: false,
//         maxAge: 3600000,
//         secure: false
//       }
//     })
//   )
  // app.use((req,res, next)=>{
  //   console.log(req.session.cookie)
  //   next()
  // })
  // console.log(session.cookie)

// ROUTES
// 2) Create a test route 
// app.get("/", (req,res) => {
//     console.log("Cookies ", req.cookies)
// })

// Now import the availiable routes in routes/index.js
const routes = require('./routes/index.js')
app.use('/', routes)

// 4) catch route if it doesnt match to anything we will sent this response 
app.use((req, res) => {res.status(404).json({message: "Not a proper route- 404 Error"})})

// LISTENER
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}` ))

