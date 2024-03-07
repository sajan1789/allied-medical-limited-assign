const mongoose=require("mongoose")

const tenantSchema=mongoose.Schema(
    {
        hospital_name:{type:String,required:true},
        specialization:{type:String,required:true},
        addresh:{type:String,required:true},
        email:{type:String,unique:true,required:true},
        password:{type:String,required:true},
       
    },
    {
        versionKey:false
    }
)

const TenantModel=mongoose.model("tenant",tenantSchema)

module.exports={
    TenantModel
}