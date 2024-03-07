const { PatientModel } = require("../Model/patientModel");
const express = require("express");
const patientRouter = express.Router();
patientRouter.use(express.json());
const {auth}=require("../MiddleWare/auth.middleware")
 patientRouter.get("/",auth, async(req,res)=>{
       
      try{
        const patient=await PatientModel.find({"patientId":req.body.patientId})
        res.status(200).send(patient) 
      }catch(err){
        res.status(400).send(err)
      }     
 })

patientRouter.post("/add",auth, async(req,res)=>{
  console.log(req.body)
         try{
           const patient=new PatientModel(req.body)
           await patient.save()
           res.status(200).send({"msg":"New patient added"})
         }catch(err){
          res.status(400).send(err)
         }
})
patientRouter.get("/last-month", auth, async (req, res) => {
  try {
    const currentDate = new Date();
    const lastMonthStartDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );
    const lastMonthEndDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    );
    const patients = await PatientModel.find({
      "patientId": req.body.patientId,
      "admissionDate": { $gte: lastMonthStartDate, $lte: lastMonthEndDate }
    });
    res.status(200).send(patients);
  } catch (err) {
    res.status(400).send(err);
  }
});
patientRouter.patch("/update/:id",auth,async(req,res)=>{
      const {id}=req.params;
      const payload=req.body
      if(id){
        try{
       await PatientModel.findByIdAndUpdate({_id:id},payload)
       res.send("update successfully")
        
        }catch(err){
         res.send(err)
        }
      }
})
patientRouter.delete("/delete/:id",auth,async(req,res)=>{
  const {id}=req.params;
    if(id){
      try{
     
       await PatientModel.findByIdAndDelete({_id:id})
       res.status(200).send({"msg":"patient has been deleted "})
     }catch(err){
       res.status(400).send({"err":err})
      }
     }
    
})

module.exports = { patientRouter };