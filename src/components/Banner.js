import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
   
    title: {
      display:'flex',
      justifyContent:'center',
    },
  }));

const Banner = () => {
    const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.title}>
        <Typography variant="h5" className="text-center" >
          React Weather Material UI
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Banner;
