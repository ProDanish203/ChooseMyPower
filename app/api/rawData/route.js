

export const GET = async (req, res) => {
    try{
        const {zipCode} = req.json();
        const response = await fetch(`http://api.powertochoose.org/api/PowerToChoose/plans?zip_code=${zipCode}`);
        const data = await response.json();

        return new Response(JSON.stringify(data), {status: 200});
    }catch(error){
        return new Response(`Failed to fetch the resource: ${error.message}`, {status: 500})
    }
}