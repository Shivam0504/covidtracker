import React ,{Fragment}from 'react';
import Cards from '../components/cards/cards';
import Graphs from '../components/graphs/graphs';
//import Countries from '../components/countries/countries';
import {fetchData,fetchDailyData} from '../api';
//import amber from '@material-ui/core/colors/amber';

export default class Global extends React.Component{

    state = {
        data :{},
        countryDailyData:[]
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
    <Fragment >
     
     <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
     <h1>Worldwide Stats</h1>
        <Cards data={this.state.data}/>
        <Graphs countryDailyData={this.state.countryDailyData} data={this.state.data} country="global"/>
    </div>
    </Fragment>
  );}
}