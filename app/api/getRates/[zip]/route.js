export const GET = async ({params}, req, res) => {
    try{
        const {zip} = await req.params;
        const response = await fetch(`http://api.powertochoose.org/api/PowerToChoose/plans?zip_code=${zip}`);
        const {data} = await response.json();
        
        const selectedData = [];
        if(data){   
            const companiesToPopulate = ['RESQL01DB1245945000001-VALU', 'RESQL01DB1245476300001-DISC', 'ELSQL01DB1245250200001-TARA', 'RESQL01DB1245476300001-CIRR', 'ELSQL01DB1245304000001-AMIG', 'ELSQL01DB1245229100018-GREE', 'RESQL01DB1245929800001-TRUE', 'RESQL01DB1245854700001-CHAR', 'RESQL01DB1245472100001-FRON']

            data.forEach((item) => {
                if(companiesToPopulate.includes(item.company_unique_id)){
                    const selectedItem = {
                        plan_id: item.plan_id,
                        zip_code: item.zip_code,
                        company_unique_id: item.company_unique_id,
                        company_id: item.company_id,
                        company_tdu_id: item.company_tdu_id,
                        company_tdu_name: item.company_tdu_name,
                        company_name: item.company_name,
                        company_logo: item.company_logo,
                        website: item.website,
                        plan_name: item.plan_name,
                        plan_details: item.plan_details,
                        plan_type: item.plan_type,
                        special_terms: item.special_terms,
                        rate_type: item.rate_type,
                        term_value: item.term_value,
                        price_kwh500: item.price_kwh500,
                        price_kwh1000: item.price_kwh1000,
                        price_kwh2000: item.price_kwh2000,
                        pricing_details: item.pricing_details,
                        fact_sheet: item.fact_sheet,
                        terms_of_service: item.terms_of_service,
                        go_to_plan: item.go_to_plan,
                        yrac_url: item.yrac_url,
                        enroll_phone: item.enroll_phone,
                        renewable_energy_id: item.renewable_energy_id,
                        renewable_energy_description: item.renewable_energy_description,
                        rating_total: item.rating_total,
                        rating_count: item.rating_count,
                        jdp_rating: item.jdp_rating,
                        jdp_rating_year: item.jdp_rating_year,
                        sort_key: item.sort_key,
                    }

                    selectedData.push(selectedItem);
                }
            });
        }
        
        return new Response(JSON.stringify(selectedData), {status: 200});
    }catch(error){
        console.log(error)
        return new Response(`Failed to fetch the resource: ${error.message}`, {status: 500})
    }
}