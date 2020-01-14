var mongoose = require("mongoose")
module.exports = new mongoose.model("piece", new mongoose.Schema({
    _id :mongoose.Schema.Types.ObjectId,
    name : String,
    size : Number,
    sort:String,
    quantity:Number

}))