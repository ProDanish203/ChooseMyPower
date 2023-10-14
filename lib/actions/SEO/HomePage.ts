"use server"
import { connectDb } from "../../config/db";
import HomeModel from "../../models/Home";
import { revalidatePath } from "next/cache";

interface Props{
    id?: string,
    dataFor?: string,
    heading: string,
    tagLine: string,
    aboutHeading: string,
    aboutPara1: string,
    aboutPara2: string,
    expertsTagline: string,
    servicesTagline: string,
    footerPara: string,
}

export const getHomeData = async (dataFor: string) => {
    try{
        await connectDb();

        const home = await HomeModel.findOne({dataFor});

        if(home){
            return {data: home, success: true, message: "SEO data fetched successfully"}
        }else{
            return {success: false, message: "Error occured while while SEO data"}
        }

    }catch(error:any){
        throw new Error(`Failed to fetch SEO data: ${error.message}`)
    }
}

export const createHome = async ({heading, tagLine, aboutHeading, aboutPara1, aboutPara2, expertsTagline, servicesTagline, footerPara}: Props) => {
    try{
        await connectDb();

        const home = await HomeModel.create({
            heading, tagLine, aboutHeading, aboutPara1, aboutPara2, expertsTagline, servicesTagline, footerPara,
        })

        if(home){
            revalidatePath('/');
            return {success: true, message: "SEO data added successfully"}
        }else{
            return {success: false, message: "Error occured while adding SEO data"}
        }

    }catch(error:any){
        throw new Error(`Failed to create Home SEO data: ${error.message}`)
    }
}

export const updateHome = async ({dataFor, heading, tagLine, aboutHeading, aboutPara1, aboutPara2, expertsTagline, servicesTagline, footerPara}: Props) => {
    try{
        await connectDb();

        const result = await HomeModel.findOneAndUpdate(
            {dataFor},
            {
              heading,
              tagLine,
              aboutHeading,
              aboutPara1,
              aboutPara2,
              expertsTagline,
              servicesTagline,
              footerPara,
            },
            { new: true } // This option ensures the updated document is returned
          );

        if(result){
            revalidatePath('/');
            return {success: true, message: "SEO data updated successfully"}
        }else{
            return {success: false, message: "Error occured while updating SEO data"}
        }

    }catch(error:any){
        throw new Error(`Failed to update Home SEO data: ${error.message}`)
    }
}