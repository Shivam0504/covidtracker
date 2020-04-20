import React from 'react';
import {Card , CardContent , Typography} from '@material-ui/core';
//mport EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
export default function About() {


  return (
    <div >
     
     <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",marginTop:"10%",paddingBottom:"30%"}}>
       <Card>
           <CardContent>
               <Typography>
                   Developed By Shivam Kirti
               </Typography>
               <Typography>
                   Sophomore @ BIT Mesra
               </Typography>
               <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
               <IconButton aria-label="delete" href="https://www.linkedin.com/in/shivam-kirti-47159618b">
               <LinkedInIcon />
             </IconButton>
             <IconButton aria-label="delete" href="https://github.com/Shivam0504">
               <GitHubIcon />
             </IconButton>
             </div>

           </CardContent>
       </Card>
    </div>
    </div>
  );
}