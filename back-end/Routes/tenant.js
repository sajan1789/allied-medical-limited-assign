const bcrypt=require("bcrypt")
const express=require("express")
const tenantRoutes=express.Router()
const jwt = require("jsonwebtoken");
tenantRoutes.use(express.json())
const {TenantModel}=require("../Model/tenantModel") 
tenantRoutes.post("/login",async(req,res)=>{
    console.log("hello-login-page")
     const {email,password}=req.body
    try{
      const user=await TenantModel.findOne({email})
         if(user){
            bcrypt.compare(password,user.password,(err,result)=>{
                 if(result){
                    res.send({"msg":"Login SuccessFull","token":jwt.sign({"userId" :user._id}, 'shhhhh'),"name":user.name})
                 }
                 else{
                    res.send({"msg":"wrong Password"})
                 }
            })
         }
         else{
            res.send({"msg":"User Not Found"})
         }
    }catch(err){
        res.send({"error":err.message})
    }
      
})
tenantRoutes.post("/signUp",async(req,res)=>{
     const {hospital_name,specialization,addresh,email,password}=req.body;
     console.log(hospital_name,email,password)
     try{
      const user = await TenantModel.findOne({ email });
      if(!user){
         bcrypt.hash(password,3,async(err,hash)=>{
            const newUser=new TenantModel({hospital_name,specialization,addresh,email,password:hash})
            await newUser.save()
            res.send({"msg":"Registration SuccessFull"})
       })
      }
      else{
         res.status(400).send( {msg:"Email is Alreay Registered"});
      }
       
     }
     catch(err){
        res.send({"error":err.message})
     }

})
module.exports={
    tenantRoutes
}