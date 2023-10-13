import mongoose from "mongoose";

const ServicesSchema = new mongoose.Schema({
    title: String,
    para1: String,
    para2: String,
    slug: String,
    image: String,
    dataFor: {
        type: String,
        default: 'services'
    }
},
{timestamps: true})

const Services = mongoose.models.Services || mongoose.model('Services', ServicesSchema);

export default Services;