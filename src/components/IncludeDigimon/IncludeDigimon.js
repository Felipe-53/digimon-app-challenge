import React, { useState, useEffect } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useStyles from './includeDigimonStyles';
import Button from '@material-ui/core/Button';

function IncludeDigimon({ openIncludeModal, set_openIncludeModal }) {
  const classes = useStyles();

  const [includeStatus, set_includeStatus] = useState('notInitiated');
  const [name, set_name] = useState('');
  const [level, set_level] = useState('');


  const mapping = {
    'notInitiated': (
      null
    ),

    'submited': null,

    'error': null
  }

  function handleSearchClick() {
    return null;
  }

  function handleClose() {
    set_openIncludeModal(false);
  }

  function actions() {
    if (includeStatus === 'notInitiated') {
      return (
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearchClick}
          >
            INCLUDE
          </Button>
        </DialogActions>
      );
    }

    return null;
  }

  return (
    <Dialog PaperProps={{style: {width: '60%'}}} open={openIncludeModal} onClose={handleClose}>
      <DialogTitle>Include Digimon</DialogTitle>
      <DialogContent className={classes.dialogContent}>
        {mapping[includeStatus]}
      </DialogContent>

      {actions()}
    </Dialog>
  );
}

export default IncludeDigimon;
