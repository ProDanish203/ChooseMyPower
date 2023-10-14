import Rates from "../models/Rates";
import { connectDb } from "../config/db";


export const getRates = async (zip: string) => {
    try{
        await connectDb();

        const data = await Rates.find({zip_code: zip});

        if(data){
            return {data, success: true, message: "SEO data fetched successfully"}
        }else{
            return {success: false, message: "Error occured while while SEO data"}
        }

    }catch(error:any){
        throw new Error(`Failed to fetch SEO data: ${error.message}`)
    }
}