const express=require("express")
const app=express()
const cors = require("cors");
app.use(express.json())
const {connection}=require("./db")
const { tenantRoutes}=require("./Routes/tenant.js")
const { patientRouter}=require("./Routes/patientRoute")
app.use(cors());
app.use("/tenants",tenantRoutes)
app.use("/patient", patientRouter)
app.listen(8080,async()=>{
    try{
        await   connection
        console.log("connected")
       }
       catch(err){
           res.send({"err":err.message})
       } 
     
})
