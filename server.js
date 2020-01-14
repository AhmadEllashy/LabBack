var express = require("express")
var app = express()
var uuid = require("uuid/v4")
var session = require("express-session")
var cors = require("cors")
var cookieparser = require("cookie-parser")
var apis = require("./api/apis")
var DB = require("./DB")

app.use(express.json())
app.use(session({
    genid:uuid,
    secret:"secreet"
}))
app.use(cookieparser())
app.use(cors({
    origin:"https://ahmadellashy-6e187.firebaseapp.com",
    credentials:true
}))
apis(app)
DB()
app.listen(8090)