import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PlaceIcon from '@material-ui/icons/Place';
//import {Link } from 'react-router-dom';
//import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
import PublicIcon from '@material-ui/icons/Public';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} color="secondary">
      <AppBar position="static" style={{ background: '#2E3B55' }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            COVID TRACKER
          </Typography>
         
          <Button  variant="contained" startIcon= {<HomeIcon/>} href="/">Home</Button>
          <Button  variant="contained"  startIcon={<PublicIcon/>} href="/country">Country-wise stats</Button>
          <Button  variant="contained"  startIcon={<PlaceIcon/>} color="default" href="/india">India</Button>
          <Button   variant="contained" startIcon={<AccountCircleIcon/>} color="default" href="/about">About</Button>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}