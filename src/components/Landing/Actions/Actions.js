import React from 'react'
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  actions: {
    display: 'flex',
  }
})

function Actions() {
  return (
    <div>
      <Button variant="contained" color="primary">
        VER TODOS
      </Button>

      <Button variant="contained" color="secondary">
        INCLUIR
      </Button>
    </div>
  );
}

export default Actions
