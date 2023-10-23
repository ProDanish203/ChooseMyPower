
export const GET = async (req, res) => {
    try{
        const zip = req.nextUrl.searchParams.get('zip');

        const response = await fetch(`http://api.powertochoose.org/api/PowerToChoose/plans?zip_code=${zip}`);

        const data = await response.json();

        // const filteredData = data.data.filter((plan) => plan.jdp_rating > 2)
        // filteredData.filter((plan) => plan.jdp_rating > 5)

        return new Response(JSON.stringify(data), {status: 200});
    }catch(error){
        console.log(error)
        return new Response(`Failed to fetch the resource: ${error.message}`, {status: 500})
    }
}