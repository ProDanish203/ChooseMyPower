import mongoose from "mongoose";

const HomeSchema = new mongoose.Schema({
    heading: String,
    tagLine: String,
    aboutHeading: String,
    aboutPara1: String,
    aboutPara2: String,
    expertsTagline: String,
    servicesTagline: String,
    footerPara: String,
    dataFor: {
        type: String,
        default: 'home'
    }
},
{timestamps: true})

const Home = mongoose.models.Home || mongoose.model('Home', HomeSchema);

export default Home;