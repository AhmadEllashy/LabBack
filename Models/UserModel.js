var mongoose = require("mongoose")

module.exports = new mongoose.model("user",new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name :{type:String},
    email:{type:String},
    password:{type:String},
    phone:{type:String},
    address:{type:String}
}))