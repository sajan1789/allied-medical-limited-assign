const jwt=require("jsonwebtoken")

const auth=(req,res,next)=>{
    const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWU4YzM5YjAwYTEzMTViZWU2ZWJkZjkiLCJpYXQiOjE3MDk3OTkzOTJ9.wJdAh0uxgqFlcywATcAWa6yf7XPJpvx43TiVRYgvXso";
    console.log(req.body)
    if(token){
     const decoded=jwt.verify(token,"shhhhh")    
      if(decoded){
         req.body.userId=decoded.userId
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