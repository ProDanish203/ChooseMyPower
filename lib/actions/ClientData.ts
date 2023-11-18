"use server"
import { connectDb } from "../config/db";
import CustomerModel from "../models/Customer";
import { revalidatePath } from "next/cache";

interface CreateProps{
    address: string;
    startDate: string;
}

interface Props{
    fname: string;
    lname: string;
    email: string;
    phone: string;
    dob: string;
    id?: string; 
}

export const createClient = async ({address, startDate}: CreateProps) => {
    try{
        await connectDb();

        const data = await CustomerModel.create({
            address, startDate
        })

        if(data){
            revalidatePath('/');
            return {data, success: true, message: "User Collection Created"}
        }else{
            return {success: false, message: "Error occured while creating user collection"}
        }

    }catch(error:any){
        throw new Error(`Failed to create user collection: ${error.message}`)
    }
}


export const completeClient = async ({dob, email, fname, lname, phone, id}: Props) => {
    try{
        await connectDb();

        const data = await CustomerModel.findByIdAndUpdate(id, {
            fname, lname, email, phone, dob
        })

        if(data){
            revalidatePath('/');
            return {data, success: true, message: "User Collection Updated"}
        }else{
            return {success: false, message: "Error occured while updating user collection"}
        }

    }catch(error:any){
        throw new Error(`Failed to create user collection: ${error.message}`)
    }
}

