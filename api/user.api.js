var mongoose = require("mongoose")
var userModel = require("../Models/UserModel")

module.exports = (app) => {

    app.post("/signup", (req, resp) => {

        const { name, password, phone, address, email } = req.body
        let UModle = new userModel({
            _id: mongoose.Types.ObjectId(),
            name,
            email,
            password,
            phone,
            address
        })
       UModle.save((err,Data)=>{
           err?resp.json({message:"error"}):resp.json({message:"Done"})
       })
      
    })



app.post("/email",(req,resp)=>{  ///Email validation
    const{email}=req.body
     
    userModel.findOne({email}).exec((err,Dta)=>{
        
        if(Dta === null){
            resp.json({message:"not_Exist"})
            
        }else{
            
            resp.json({message:"exist"})
        }
    })
})
app.post("/name",(req,resp)=>{ //=> UserName Validation
    const{name}=req.body
    
    userModel.findOne({name}).exec((err,Dta)=>{
        
        if(Dta === null){
            resp.json({message:"not_Exist"})
            
        }else{
            
            resp.json({message:"exist"})
        }
    })
})

app.post("/signin",(req,resp)=>{
    const{email,password}=req.body
    userModel.findOne({email,password}).exec((err,Data)=>{
       if(Data){
        req.session.Data = Data
        resp.json({message:"Done"})
       }else{
           resp.json({message:"error"})
       }
    })
})
}