import React from 'react';
import Cards from './components/cards/cards';
import Graphs from './components/graphs/graphs';
import Countries from './components/countries/countries';
import {fetchData,fetchDailyData} from './api';


class App extends React.Component{
    
    state = {
        data :{},
        country : "",
        countryDailyData:[]
    }
        
    handleCountryChange= async(country)=>{
        //console.log(country);
        const countryData = await fetchData(country);
        const countryDailyData = await fetchDailyData(country);
        console.log(countryDailyData);
        this.setState({data : countryData, country:country, countryDailyData: countryDailyData});
    }
    async componentDidMount(){
        const data = await fetchData();
        //console.log(data);
        const countryDailyData = await fetchDailyData();
        console.log(countryDailyData)
        this.setState({data,countryDailyData});

    }

    render(){
        return (
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                <h1>Covid Tracker</h1>
                <Cards data={this.state.data}/>
                <Countries handleCountryChange={this.handleCountryChange}/>
                <Graphs countryDailyData={this.state.countryDailyData}/>
            </div>
        )
    }
}


export default App;