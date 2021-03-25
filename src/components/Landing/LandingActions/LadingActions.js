import React from 'react'
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  actions: {
    paddingBottom: '2rem',
    width: '13rem',
    display: 'flex',
    justifyContent: 'space-around'
  }
})

function LandingActions({ set_openSearchModal, set_openIncludeModal }) {
  const classes = useStyles();

  return (
    <div className={classes.actions}> 
      <Button
        variant="contained"
        color="secondary"
        onClick={() => set_openIncludeModal(true)}
      >
        INCLUDE
      </Button>

      <Button
        variant="contained"
        color="primary"
        onClick={() => set_openSearchModal(true)}
      >
        SEARCH
      </Button>
    </div>
  );
}

export default LandingActions;
