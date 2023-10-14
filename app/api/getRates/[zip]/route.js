import Rates from "@../../../lib/models/Rates";
import { connectDb } from "@../../../lib/config/db";

export const GET = async ({params}, req, res) => {
    try{
        const {zip} = await req.params;

        const data = await Rates.find({zip_code: zip});

        return new Response(JSON.stringify(data), {status: 200});
    }catch(error){
        console.log(error)
        return new Response(`Failed to fetch the resource: ${error.message}`, {status: 500})
    }
}