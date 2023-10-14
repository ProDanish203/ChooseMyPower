"use server"
import { connectDb } from "../../config/db";
import ServiceModel from "../../models/Services";
import { revalidatePath } from "next/cache";

interface Props{
    id?: string,
    dataFor?: string,
    title: string;
    para1: string;
    para2: string;
    image: string;
}

export const getServicesSeo = async () => {
    try{
        await connectDb();
        const service = await ServiceModel.find();

        if(service){
            return {data: service, success: true, message: "SEO data fetched successfully"}
        }else{
            return {success: false, message: "Error occured while while SEO data"}
        }

    }catch(error:any){
        throw new Error(`Failed to fetch SEO data: ${error.message}`)
    }
}

export const getService = async (id:string) => {
    try{
        await connectDb();
        const service = await ServiceModel.findById(id);

        if(service){
            return {data: service, success: true, message: "SEO data fetched successfully"}
        }else{
            return {success: false, message: "Error occured while while SEO data"}
        }

    }catch(error:any){
        throw new Error(`Failed to fetch SEO data: ${error.message}`)
    }
}

export const createService = async ({title, para1, para2, image}: Props) => {
    try{
        await connectDb();
        const service = await ServiceModel.create({
            title, para1, para2, image
        })

        if(service){
            revalidatePath("/");
            return {success: true, message: "SEO data added successfully"}
        }else{
            return {success: false, message: "Error occured while adding SEO data"}
        }

    }catch(error:any){
        throw new Error(`Failed to create Home SEO data: ${error.message}`)
    }
}

export const updateService = async ({id, dataFor, title, image, para1, para2 }: Props) => {
    try{
        await connectDb();
        const result = await ServiceModel.findByIdAndUpdate(
            id,
            { title, para1, para2, image},
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