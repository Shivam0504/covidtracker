import React from 'react';
import {Card , CardContent , Typography , Grid} from '@material-ui/core';
import CountUp from 'react-countup';
//import FaceIcon from '@material-ui/icons/Face';
import amber from '@material-ui/core/colors/amber';
import lightGreen from '@material-ui/core/colors/lightGreen';
import pink from '@material-ui/core/colors/pink';
import grey from '@material-ui/core/colors/grey';
import MoodIcon from '@material-ui/icons/Mood';
import HealingIcon from '@material-ui/icons/Healing';
import PeopleIcon from '@material-ui/icons/People';
import MoodBadIcon from '@material-ui/icons/MoodBad';


const primary = pink[400];


const Cards = ({data :{cases , recovered , deaths , updated},country}) => {
    console.log(country)
    if(country==="none")
    {
        return <div style={{paddingBottom:"30%"}}><h5>Use the drop down menu to select a country</h5></div>

    }
    else if(!cases){
        return <div style={{paddingBottom:"30%"}}><h5>Data Not Available Please select another country</h5></div>
    }
    return (
        <div style={{margin:"2%" ,width:"80%"}}>
            <Grid container spacing={1} justify="center" >
                <Grid item component = {Card}  xs={8} sm={3} style={{ background: primary }}>
                    <CardContent>
                        <PeopleIcon/>
                        <Typography gutterBottom>TOTAL</Typography>
                        <Typography variant="h5"><CountUp start={0} end={cases} duration={1.5} separator=","/></Typography>
                        <Typography color="textPrimary" gutterBottom>{new Date(updated).toDateString()}</Typography>
                        
                    </CardContent>

                </Grid>
                <Grid item component = {Card} xs={8} sm={3} style={{ background: amber[800] }} >
                    <CardContent>
                        <HealingIcon/>
                        <Typography color="textPrimary" gutterBottom>ACTIVE</Typography>
                        <Typography variant="h5"><CountUp start={0} end={cases-recovered-deaths} duration={1.5} separator=","/></Typography>
                        <Typography color="textPrimary" gutterBottom>{new Date(updated).toDateString()}</Typography>
                        
                    </CardContent>

                </Grid>
                <Grid item component = {Card} xs={8} sm={3}style={{ background: lightGreen[400] }}>
                    <CardContent>
                        <MoodIcon/>
                        <Typography color="textPrimary" gutterBottom>RECOVERED</Typography>
                        <Typography variant="h5"><CountUp start={0} end={recovered} duration={1.5} separator=","/></Typography>
                        <Typography color="textPrimary" gutterBottom>{new Date(updated).toDateString()}</Typography>
                        
                    </CardContent>

                </Grid>
                <Grid item component = {Card} xs={8} sm={3}style={{ background: grey[500]}}>
                    <CardContent justify="center" >
                        <MoodBadIcon/>
                        <Typography color="textPrimary" gutterBottom>DEATHS</Typography>
                        <Typography variant="h5"><CountUp start={0} end={deaths} duration={1.5} separator=","/></Typography>
                        <Typography color="textPrimary" gutterBottom>{new Date(updated).toDateString()}</Typography>
                        
                    </CardContent>

                </Grid>

            </Grid>
        </div>
    )
}

export default Cards;