import React from 'react';
import {Card , CardContent , Typography , Grid} from '@material-ui/core';
import CountUp from 'react-countup';


const Cards = ({data :{cases , recovered , deaths , updated}}) => {
    if(!cases){
    return "Data Not Available Please select another country";}
    return (
        <div>
            <Grid container spacing={3} justify="center" >
                <Grid item component = {Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Total Cases :</Typography>
                        <Typography variant="h5"><CountUp start={0} end={cases} duration={1.5} separator=","/></Typography>
                        <Typography color="textSecondary" gutterBottom>{new Date(updated).toDateString()}</Typography>
                        
                    </CardContent>

                </Grid>
                <Grid item component = {Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered :</Typography>
                        <Typography variant="h5"><CountUp start={0} end={recovered} duration={1.5} separator=","/></Typography>
                        <Typography color="textSecondary" gutterBottom>{new Date(updated).toDateString()}</Typography>
                        
                    </CardContent>

                </Grid>
                <Grid item component = {Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths :</Typography>
                        <Typography variant="h5"><CountUp start={0} end={deaths} duration={1.5} separator=","/></Typography>
                        <Typography color="textSecondary" gutterBottom>{new Date(updated).toDateString()}</Typography>
                        
                    </CardContent>

                </Grid>

            </Grid>
        </div>
    )
}

export default Cards;