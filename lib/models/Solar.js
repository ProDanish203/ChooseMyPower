import mongoose from "mongoose";

const SolarSchema = new mongoose.Schema({
    heading: String,
    para1: String,
    para2: String,
    subHeading1: String,
    subPara1: String,
    subHeading2: String,
    subPara2: String,
    dataFor: {
        type: String,
        default: 'solar'
    }
},
{timestamps: true})

const Solar = mongoose.models.Solar || mongoose.model('Solar', SolarSchema);

export default Solar;