var mongoose = require("mongoose")
module.exports = ()=>{
mongoose.connect("mongodb+srv://Ahmad:ahm1372000@r@cluster0-tdqjw.mongodb.net/Lab?retryWrites=true&w=majority",{useNewUrlParser:true})
}