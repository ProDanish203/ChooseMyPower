import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    address: String,
    startDate: String,
    email: String,
    phone: String,
    dob: String,
    cardName: String,
    cardNumber: Number,
    cardExpiry: String,
    cardSecret: Number,
    ssnNumber: String,
    zip: String,
    planId: String,
    completed:{
        type: Boolean,
        default: false
    }
},
{timestamps: true})

const Client = mongoose.models.Client || mongoose.model('Client', ClientSchema);

export default Client;