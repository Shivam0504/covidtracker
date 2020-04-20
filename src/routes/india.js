import React from 'react';
import Cards from '../components/cards/cards';
import Graphs from '../components/graphs/graphs';
//import Countries from '../components/countries/countries';
import {fetchData,fetchDailyData} from '../api';

export default class India extends React.Component{

    state = {
        data :{},
        countryDailyData:[]
    }
    async componentDidMount(){
        const data = await fetchData("India");
        //console.log(data);
        const countryDailyData = await fetchDailyData("India");
        console.log(countryDailyData)
        this.setState({data,countryDailyData});

    }
    render(){
  return (
    <div >
     
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
        <h1>India</h1>
        <Cards data={this.state.data} country="India"/>
        <Graphs countryDailyData={this.state.countryDailyData}  data={this.state.data}/>
    </div>
    </div>
  );}
}