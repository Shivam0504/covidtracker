import React ,{Fragment} from 'react';
import {Line,Doughnut,Bar} from 'react-chartjs-2';
//import TimelineIcon from '@material-ui/icons/Timeline';
//import { Typography } from '@material-ui/core';
//import TimelineIcon from '@material-ui/icons/Timeline';
import {Card , CardContent} from '@material-ui/core';

const Graphs = ({countryDailyData ,data :{cases , recovered , deaths , updated},country})=>{
    
    console.log(country);
    const dailyConfirmedCases = [0];
    const dailyRecoveredCases = [0];
    const dailyDeaths = [0];
    for(var i = 1; i<countryDailyData.length;i+=1)
    {
        //console.log(countryDailyData[i])
       // console.log(countryDailyData[i])
        dailyConfirmedCases[i]=countryDailyData[i].confirmed-countryDailyData[i-1].confirmed<0?0:countryDailyData[i].confirmed-countryDailyData[i-1].confirmed;
        dailyRecoveredCases[i]=countryDailyData[i].recovered-countryDailyData[i-1].recovered<0?0:countryDailyData[i].recovered-countryDailyData[i-1].recovered;
        dailyDeaths[i]=(countryDailyData[i].deaths-countryDailyData[i-1].deaths)<0?0:(countryDailyData[i].deaths-countryDailyData[i-1].deaths);
    }
    console.log(dailyRecoveredCases)
    const barGraph1 = (countryDailyData.length?
        (
            <div style={{backgroundColor:"#ffe0b2"}}>
              <Bar
                data={{
                    labels: countryDailyData.map(({date})=>new Date(date).toDateString()),
                    datasets: [
                      {
                        label: 'Infected',
                        backgroundColor: '#ffb300',
                                borderColor: '#ff6f00',
                        borderWidth: 2,
                        data: dailyConfirmedCases
                      }
                    ]
                  }}
                options={{
                  title:{
                    display:true,
                    text:'Daily Cases',
                    fontSize:20
                  },
                  legend:{
                    display:true,
                    position:'right'
                  },
                  scales: {
                    xAxes: [{
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        }   
                    }]},
                  maintainAspectRatio: true
                }}
              />
            </div>
          )
          :null);
          const barGraph2 = (countryDailyData.length?
            (
                <div style={{backgroundColor:"#b2ff59"}}>
                  <Bar
                    data={{
                        labels: countryDailyData.map(({date})=>new Date(date).toDateString()),
                        datasets: [
                          {
                            label: 'Recovered',
                            backgroundColor: '#8bc34a',
                                borderColor: '#689f38',
                            borderWidth: 2,
                            data: dailyRecoveredCases
                          }
                        ]
                      }}
                    options={{
                      title:{
                        display:true,
                        text:'Daily Recovered',
                        fontSize:20
                      },
                      scales: {
                        xAxes: [{
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                            }   
                        }]},
                      legend:{
                        display:true,
                        position:'right'
                      },
                      maintainAspectRatio: true
                    }}
                  />
                </div>
              )
              :null);
    
              const barGraph3 = (countryDailyData.length?
                (
                    <div style={{backgroundColor:"#e0e0e0"}}>
                      <Bar
                        data={{
                            labels: countryDailyData.map(({date})=>new Date(date).toDateString()),
                            datasets: [
                              {
                                label: 'Deaths',
                                backgroundColor: '#78909c',
                                borderColor: '#455a64',
                                borderWidth: 2,
                                data: dailyDeaths
                              }
                            ]
                          }}
                        options={{
                          title:{
                            display:true,
                            text:'Daily deaths',
                            fontSize:20
                          },
                          legend:{
                            display:true,
                            position:'right'
                          },
                          maintainAspectRatio: true,
                          scales: {
                            xAxes: [{
                                gridLines: {
                                    color: "rgba(0, 0, 0, 0)",
                                }
                            }],
                            yAxes: [{
                                gridLines: {
                                    color: "rgba(0, 0, 0, 0)",
                                }   
                            }]}

                        }}
                      />
                    </div>
                  )
                  :null);
    const pieChart =  (countryDailyData.length?(
        <div style={{backgroundColor:"#fff59d"}}>
        <Doughnut
          data={
            {
                labels: ['Active', 'Recovered', 'Deaths'],
                datasets: [
                  {
                    label: 'Cases',
                    backgroundColor: [
                      
                      '#ffa000',
                      '#c6ff00',
                      '#e0e0e0'
                    ],
                    hoverBackgroundColor: [
                    
                    '#e65100',
                    '#64dd17',
                    '#212121'
                    ],
                    //data:[2,3,5]
                    data:[cases-recovered-deaths,recovered,deaths]
                  }
                ]
              }
          }
          options={{
            title:{
              display:true,
              text:'Pie chart',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            },
            
            responsive: true,
          maintainAspectRatio: true,
          }}
        /></div>
    )
    :null);
    
    const lineChart = (
        
        countryDailyData.length?(
            <div style={{backgroundColor:"#fff59d"}}>
            <Line data={{
                labels : countryDailyData.map(({date})=>new Date(date).toDateString()),
                datasets : [{
                    data : countryDailyData.map(({confirmed})=> confirmed),
                    label : 'Infected',
                    borderColor: '#ff1744',
                    fill : false
                },{
                    data : countryDailyData.map(({deaths})=> deaths),
                    label : 'Deaths',
                    borderColor: 'black ',
                    fill : false
                }]}}
                options={{
                    title:{
                      display:true,
                      text:'Live chart',
                      fontSize:20
                    },
                    scales: {
                        xAxes: [{
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                            }   
                        }]},
                    maintainAspectRatio: true,
                }}
                
            
            /></div>)
            :null
    )
    
    
    const lineChart2 =(
        countryDailyData.length?(
            <div style={{backgroundColor:"#fff59d"}}>
            <Line data={{
                labels : countryDailyData.map(({date})=>new Date(date).toDateString()),
                datasets : [{
                    data : countryDailyData.map(({confirmed})=> confirmed),
                    label : 'Infected',
                    borderColor: '#ff1744',
                    fill : false
                },{
                    data : countryDailyData.map(({deaths})=> deaths),
                    label : 'Deaths',
                    borderColor: 'black ',
                    fill : false
                },
                {
                    data : countryDailyData.map(({recovered})=> recovered),
                    label : 'Recovered',
                    borderColor: 'green',
                    fill : false
                }]}}
                options={{
                    title:{
                      display:true,
                      text:'Live chart',
                      fontSize:20
                    },
                    scales: {
                        xAxes: [{
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                            }   
                        }]},
                    maintainAspectRatio: true,
                }}
                
            
            /></div>)
            :null
    );
     if(countryDailyData.length){
    return (
        
       
        <Fragment>
        <div style={{justifyContent:"center",width:"65%",marginBottom:"2%"}}>
            
        <Card >
       
         <CardContent>
         
         {(country==="global")?lineChart:lineChart2}
          </CardContent>
      
         </Card>   
            
        </div>
        
        <div style={{justifyContent:"center",width:"65%",marginBottom:"2%"}}>
            
        <Card >
         <CardContent>
             {barGraph1}
          </CardContent>
      
         </Card>   
            
        </div>
        
   
        <div style={{justifyContent:"center",width:"65%",marginBottom:"2%"}}>
        
        {(country!=="global")?
        <Card >
         <CardContent>
             {barGraph2}
          </CardContent>
      
         </Card>   :<div></div>
     }
        </div>
        
        <div style={{justifyContent:"center",width:"65%",marginBottom:"2%"}}>
            
        <Card >
         <CardContent>
             {barGraph3}
          </CardContent>
      
         </Card>   
            
        </div>
        <div style={{justifyContent:"center",width:"65%",marginBottom:"2%"}}>
            
        <Card>
         <CardContent>

             {pieChart}
          </CardContent>
      
         </Card>   
            
        </div>
        
        </Fragment>
       
    )
     }
     return (
         <div></div>
     )
}   


export default Graphs;