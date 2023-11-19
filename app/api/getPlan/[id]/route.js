export const GET = async (req, {params}, res) => {
    try{
        const {id} = await params;
        const zip = req.nextUrl.searchParams.get('zip');
    
        const response = await fetch(`http://api.powertochoose.org/api/PowerToChoose/plans?zip_code=${zip}`);
        const {data} = await response.json();

        let selectedData;
        if(data){   
            const plan = data.find(item => item.plan_id === parseInt(id))
            if(plan){
                selectedData = {
                    plan_id: plan.plan_id,
                    zip_code: plan.zip_code,
                    company_unique_id: plan.company_unique_id,
                    company_id: plan.company_id,
                    company_tdu_id: plan.company_tdu_id,
                    company_tdu_name: plan.company_tdu_name,
                    company_name: plan.company_name,
                    company_logo: plan.company_logo,
                    website: plan.website,
                    plan_name: plan.plan_name,
                    plan_details: plan.plan_details,
                    plan_type: plan.plan_type,
                    special_terms: plan.special_terms,
                    rate_type: plan.rate_type,
                    term_value: plan.term_value,
                    price_kwh500: plan.price_kwh500 + 0.00005,
                    price_kwh1000: plan.price_kwh1000 + 0.00005,
                    price_kwh2000: plan.price_kwh2000 + 0.00005,
                    pricing_details: plan.pricing_details,
                    fact_sheet: plan.fact_sheet,
                    terms_of_service: plan.terms_of_service,
                    go_to_plan: plan.go_to_plan,
                    yrac_url: plan.yrac_url,
                    enroll_phone: plan.enroll_phone,
                    renewable_energy_id: plan.renewable_energy_id,
                    renewable_energy_description: plan.renewable_energy_description,
                    sort_key: plan.sort_key,
                }
            }
            else console.log("Not found")            
        }

        return new Response(JSON.stringify(selectedData), {status: 200});
    }catch(error){
        console.log(error)
        return new Response(`Failed to fetch the resource: ${error.message}`, {status: 500})
    }
}