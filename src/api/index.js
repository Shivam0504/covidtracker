import axios from 'axios';


const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) =>{
    let countryURL= url;
    if(country){
    countryURL= `https://api.covid19api.com/summary`;}
    try{
        
        //console.log(Global);
        if(!country)
        {
            //const res = await axios.get(url);
            //console.log(res);
            const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(url);
            //const response = await axios.get(url);
            //console.log(lastUpdate);
            return {cases:confirmed.value, recovered : recovered.value , deaths : deaths.value , updated : lastUpdate};

        }
        const {data : {Countries}} = await axios.get(countryURL);
        const countryStats=  Countries.filter((e)=>(e.Country===country));
        console.log(countryStats);
        return {cases:countryStats[0].TotalConfirmed , recovered:countryStats[0].TotalRecovered , deaths :countryStats[0].TotalDeaths , updated :countryStats[0].Date}

    }
    catch(err){
        console.log(err);
    }
}

export const fetchDailyData = async (country) =>{
    try{
        if(country)
        {
            const cDailyData= await axios.get(`https://api.covid19api.com/total/dayone/country/${country}`);
            console.log(cDailyData);
            const modifiedData = cDailyData.data.map((e)=>({
                confirmed : e.Confirmed,
                recovered : e.Recovered,
                deaths : e.Deaths,
                date : e.Date
             }));
             //console.log(modifiedData);
            return modifiedData;
        }
        const {data}= await axios.get(`${url}/daily`);
        console.log(data);
        const modifiedData = data.map((dailyData)=>({
            confirmed : dailyData.confirmed.total,
            recovered : dailyData.recovered.total,
            deaths : dailyData.deaths.total,
            date : dailyData.reportDate
        }));
        console.log(modifiedData);
        return modifiedData;
    

    }
    catch(err){
        console.log(err);
    }
};


export const fetchCountries = async () =>{
    try{
        const contUrl="https://api.covid19api.com/countries";
        const countries = await axios.get(contUrl);
        //console.log(countries);
        const DATA =countries.data.map((c)=>c.Country);
        DATA.sort();
        return DATA;

    }
    catch(err){
        console.log(err);
    }
}