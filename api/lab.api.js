var LabModel = require("../Models/LabModel")
var mongoose = require("mongoose")
module.exports = (app) => {
    app.post("/addLab", (req, resp) => {
        
        const { name, model, family, ram, hard, vga, screen, processor, quantity,img } = req.body
        let ALab = new LabModel({
            _id: mongoose.Types.ObjectId(),
            name,
            model,
            family,
            ram,
            hard,
            vga,
            screen,
            processor,
            quantity,
            img
        })
        ALab.save((err, Data) => {
            
            if (Data) {
                resp.json({ message: "Done" })
            } else {
                resp.json({ message: "error" })
            }
        })
    })

    app.get("/getLabs", (req, resp) => {
        LabModel.find({}).exec((err, Data) => {
            if (Data) {
                resp.json({ message: "Done", result: Data })
            } else {
                resp.json({ message: "error" })
            }
        })
    })
    app.post("/byId",(req,resp)=>{
        const{id}=req.body
        
    LabModel.findById({_id:id}).exec((err,Data)=>{
        
        if(Data){
            resp.json({message:"Done",result:Data})
            
        }else{
            resp.json({message:"error"})
        }
    })
    })
    app.post("/remove",(req,resp)=>{
        const{id}=req.body
        
        LabModel.remove({_id:id}).exec((err,Data)=>{
            
            err?resp.json({message:"error"}):resp.json({message:"Done"})
        })
    })
}