"use server"
import { revalidatePath } from "next/cache";
import { connectDb } from "../config/db";
import CustomerModel from "../models/Customer";

export const fetchClients = async () => {
    try{
        await connectDb();

        const data = await CustomerModel.find();

        if(data){
            revalidatePath('/');
            return {data, success: true, message: "data fetched successfully"}
        }else{
            return {success: false, message: "Error occured while fetching data"}
        }

    }catch(error:any){
        throw new Error(`Failed to fetch data: ${error.message}`)
    }
}
