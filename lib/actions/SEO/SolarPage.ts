"use server"
import { connectDb } from "../../config/db";
import SolarModel from "../../models/Solar";
import { revalidatePath } from "next/cache";

interface Props{
    id?: string,
    dataFor?: string,
    heading: String,
    para1: String,
    para2: String,
    subHeading1: String,
    subPara1: String,
    subHeading2: String,
    subPara2: String,
}

export const getSolarData = async (dataFor: string) => {
    try{
        await connectDb();

        const solar = await SolarModel.findOne({dataFor});

        if(solar){
            return {data: solar, success: true, message: "SEO data fetched successfully"}
        }else{
            return {success: false, message: "Error occured while while SEO data"}
        }

    }catch(error:any){
        throw new Error(`Failed to fetch SEO data: ${error.message}`)
    }
}

export const createSolar = async ({heading, para1, para2, subHeading1, subHeading2, subPara1, subPara2 }: Props) => {
    try{
        await connectDb();

        const solar = await SolarModel.create({
            heading, para1, para2, subHeading1, subHeading2, subPara1, subPara2,
        })

        if(solar){
            revalidatePath('/solar');
            return {success: true, message: "SEO data added successfully"}
        }else{
            return {success: false, message: "Error occured while adding SEO data"}
        }

    }catch(error:any){
        throw new Error(`Failed to create Home SEO data: ${error.message}`)
    }
}

export const updateSolar = async ({id, dataFor, heading, para1, para2, subHeading1, subHeading2, subPara1, subPara2}: Props) => {
    try{
        await connectDb();

        const result = await SolarModel.findOneAndUpdate(
            {dataFor},
            { heading, para1, para2, subHeading1, subHeading2, subPara1, subPara2},
            { new: true } // This option ensures the updated document is returned
        );

        if(result){
            revalidatePath('/solar');
            return {success: true, message: "SEO data updated successfully"}
        }else{
            return {success: false, message: "Error occured while updating SEO data"}
        }

    }catch(error:any){
        throw new Error(`Failed to update Home SEO data: ${error.message}`)
    }
}