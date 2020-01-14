var mongoose = require("mongoose")
module.exports = new mongoose.model("Lab",new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    model:String,
    family:String,
    ram:Number,
    hard:String,
    screen:Number,
    processor:String,
    vga :String,
    quantity:Number,
    img:String

}))