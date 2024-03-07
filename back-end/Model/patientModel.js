const mongoose = require("mongoose");
const patientSchema = mongoose.Schema({  
    name: { type: String, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    phone: { type: String },
    age:{type :String},
    address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        country: { type: String },
        zipCode: { type: String }
    },
    admissionDate: { type: Date, default:new Date().toLocaleString()  },
    bloodGroup:{type:String},
    medicalHistory: { type: String },
    currentStatus: { type: String, enum: ['Admitted', 'Discharged', 'In Progress'], default: 'Admitted' },
}, {
    versionKey: false
});

const PatientModel = mongoose.model("Patient", patientSchema);

module.exports = {
    PatientModel
};
