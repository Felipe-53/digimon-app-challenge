import React from 'react';
import MaterialBar from '@material-ui/core/AppBar';
import useStyles from './appBarStyles';

function AppBar({ backToLanding }) {
  const classes = useStyles();

  return (
    <MaterialBar 
      className={classes.AppBar}
      position="sticky"
    >
      <span onClick={backToLanding} className={classes.logo}>DIGIMON APP</span>
    </MaterialBar>
  );
}

export default AppBar
