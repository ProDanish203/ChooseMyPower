import mongoose from "mongoose";
import validator from "validator";

const ClientSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    address: String,
    startDate: String,
    email: String,
    phone: String,
    dob: String,
    completed:{
        type: Boolean,
        default: false
    }
},
{timestamps: true})

const Client = mongoose.models.Client || mongoose.model('Client', ClientSchema);

export default Client;