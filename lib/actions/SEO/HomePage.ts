"use server"
import { connectDb } from "../../config/db";
import HomeModel from "../../models/Home";
import { revalidatePath } from "next/cache";

interface Props{
    id?: string,
    heading: string,
    tagLine: string,
    aboutHeading: string,
    aboutPara1: string,
    aboutPara2: string,
    expertsTagline: string,
    servicesTagline: string,
    footerPara: string,
    path: string
}

export const createHome = async ({heading, tagLine, aboutHeading, aboutPara1, aboutPara2, expertsTagline, servicesTagline, footerPara, path}: Props) => {
    try{
        await connectDb();

        const home = await HomeModel.create({
            heading, tagLine, aboutHeading, aboutPara1, aboutPara2, expertsTagline, servicesTagline, footerPara,
        })

        if(home){
            revalidatePath(path);
            return {success: true, message: "SEO data added successfully"}
        }else{
            return {success: false, message: "Error occured while adding SEO data"}
        }

    }catch(error:any){
        throw new Error(`Failed to create prompt: ${error.message}`)
    }
}

export const updateHome = async ({id, heading, tagLine, aboutHeading, aboutPara1, aboutPara2, expertsTagline, servicesTagline, footerPara, path}: Props) => {
    try{
        await connectDb();

        const result = await HomeModel.findByIdAndUpdate(
            id,
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
            revalidatePath(path);
            return {success: true, message: "SEO data added successfully"}
        }else{
            return {success: false, message: "Error occured while adding SEO data"}
        }

    }catch(error:any){
        throw new Error(`Failed to create prompt: ${error.message}`)
    }
}