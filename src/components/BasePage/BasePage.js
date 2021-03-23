import React from 'react';
import AppBar from '../AppBar/AppBar';
import useStyles from './basePageStyles'

function BasePage({ backToLanding, children }) {
  const classes = useStyles();

  return (
    <div className={classes.base}>
      <AppBar backToLanding={backToLanding} />
      {children}
    </div>
  );
}

export default BasePage
