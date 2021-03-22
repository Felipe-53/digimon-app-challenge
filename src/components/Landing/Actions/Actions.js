import React from 'react'
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  actions: {
    display: 'flex',
  }
})

function Actions({ set_openModal }) {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => set_openModal(true)}
      >
        SEARCH
      </Button>

      <Button variant="contained" color="secondary">
        INCLUDE
      </Button>
    </div>
  );
}

export default Actions
