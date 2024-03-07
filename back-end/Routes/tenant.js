const bcrypt=require("bcrypt")
const express=require("express")
const tenantRoutes=express.Router()

const jwt = require("jsonwebtoken");
tenantRoutes.use(express.json())
const {TenantModel}=require("../Model/tenantModel") 
tenantRoutes.post("/login",async(req,res)=>{
    
     const {email,password}=req.body
    try{
      const patient=await TenantModel.findOne({email})
      console.log("id",patient._id)
         if(patient){

            bcrypt.compare(password,patient.password,(err,result)=>{
                 if(result){
                    res.send({"msg":"Login SuccessFull","token":jwt.sign({"patientId":patient._id}, 'shhhhh'),"name":patient.name})
                 }
                 else{
                    res.send({"msg":"wrong Password"})
                 }
            })
         }
         else{
            res.send({"msg":"patient Not Found"})
         }
    }catch(err){
        res.send({"error":err.message})
    }
      
})
tenantRoutes.post("/signUp",async(req,res)=>{
     const {hospital_name,specialization,addresh,email,password}=req.body;
     console.log(hospital_name,email,password)
     try{
      const patient = await TenantModel.findOne({ email });
      if(!patient){
         bcrypt.hash(password,3,async(err,hash)=>{
            const newpatient=new TenantModel({hospital_name,specialization,addresh,email,password:hash})
            await newpatient.save()
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