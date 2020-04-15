import React from 'react';
import {Line} from 'react-chartjs-2';
const Graphs = ({countryDailyData})=>{
    
    const lineChart = (
        countryDailyData.length?(
            <Line data={{
                labels : countryDailyData.map(({date})=>new Date(date).toDateString()),
                datasets : [{
                    data : countryDailyData.map(({confirmed})=> confirmed),
                    label : 'Infected',
                    borderColor: 'red',
                    fill : false
                },{
                    data : countryDailyData.map(({deaths})=> deaths),
                    label : 'Deaths',
                    borderColor: 'black ',
                    fill : false
                }]
            }} />)
            :null
    );
        
    return (
        <div style={{display :"flex",justifyContent:"center",width:"65%"}}>
            {lineChart}
        </div>
    )

}   


export default Graphs;