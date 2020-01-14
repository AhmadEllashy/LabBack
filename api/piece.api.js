var mongoose = require("mongoose")
var PieceModel =require("../Models/PieceModel")
module.exports = (app)=>{
    app.post("/addPiece",((req,resp)=>{
        const{name, size ,sort ,quantity}=req.body
        let Pmodel = new PieceModel({
            _id:mongoose.Types.ObjectId(),
            name:name,
            size:size,
            sort:sort,
            quantity:quantity
        })
        Pmodel.save((err,Data)=>{
            err?resp.json({message:"error"}):resp.json({message:"Done"})
        })
    }))
    app.get("/getAllPieces",(req,resp)=>{
        PieceModel.find({}).exec((err,Data)=>{
            if(Data){
                resp.json({message:"Done",result:Data})
            }else{
                resp.json({message:"error"})
            }
        })
    })
    app.post("/getOnePiece",(req,resp)=>{
        const{name}=req.body
        PieceModel.find({name:name}).exec((err,Data)=>{
            if(Data){
                resp.json({message:"Done", result:Data})
            }else{
                resp.json({message:"error"})
            }
        })
    })
    

}