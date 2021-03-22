import React from 'react';
import AppBar from '../AppBar/AppBar';
import useStyles from './basePageStyles'

function BasePage({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.base}>
      <AppBar />
      {children}
    </div>
  );
}

export default BasePage
