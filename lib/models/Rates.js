import mongoose from "mongoose";

const RateSchema = new mongoose.Schema({
    plan_id: Number,
    zip_code: String,
    company_unique_id: String,
    company_id: String,
    company_tdu_id: String,
    company_tdu_name: String,
    company_name: String,
    company_logo: String,
    website: String,
    plan_name: String,
    plan_details: String,
    plan_type: Number,
    special_terms: String,
    rate_type: String,
    term_value: Number,
    price_kwh500: Number,
    price_kwh1000: Number,
    price_kwh2000: Number,
    pricing_details: String,
    fact_sheet: String,
    terms_of_service: String,
    go_to_plan: String,
    yrac_url: String,
    enroll_phone: String,
    renewable_energy_id: Number,
    renewable_energy_description: String,
    rating_total: Number,
    rating_count: Number,
    jdp_rating: Number,
    jdp_rating_year: String,
    sort_key: String,
},
{timestamps: true})

const Rates = mongoose.models.Rate || mongoose.model('Rate', RateSchema);

export default Rates;