const jwt=require("jsonwebtoken")

const auth=(req,res,next)=>{
  const token = req.headers.authorization;
    console.log(req.body)
    if(token){
     const decoded=jwt.verify(token,"shhhhh")    
      if(decoded){
        console.log(decoded.patientId)
         req.body.patientId=decoded.patientId
         next()
         
      }
      else{
        res.status(400).send({"msg":"Please Login First"})
      }
    }
    else{
        res.status(400).send({"msg":"Please Login First"})
    }

}

module.exports={auth}