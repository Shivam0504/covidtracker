import React from 'react';
import Cards from '../components/cards/cards';
import Graphs from '../components/graphs/graphs';
import Countries from '../components/countries/countries';
import {fetchData,fetchDailyData} from '../api';
//import { Typography } from '@material-ui/core';

export default class Country extends React.Component{

    state = {
        data :{},
        country : "none",
        countryDailyData:[]
    }
        
    handleCountryChange= async(country)=>{
        console.log(country);
        const countryData = await fetchData(country);
        const countryDailyData = await fetchDailyData(country);
        console.log(countryDailyData);
        this.setState({data : countryData, country:country, countryDailyData: countryDailyData});
    }
    /*async componentDidMount(){
        /*const data = await fetchData();
        //console.log(data);
        const countryDailyData = await fetchDailyData();
        console.log(countryDailyData)
        this.setState({data,countryDailyData});
        this.state.country="None";

    }*/
    render(){
  return (
    <div >
     
     <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
        <h2>Please Select a Country</h2>
        <Countries handleCountryChange={this.handleCountryChange}/>
        <Cards data={this.state.data} country={this.state.country}/>
        <Graphs countryDailyData={this.state.countryDailyData}  data={this.state.data} />
    </div>
    </div>
  );}
}