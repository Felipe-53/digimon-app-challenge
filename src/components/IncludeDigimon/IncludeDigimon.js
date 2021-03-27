import React, { useState, useEffect } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useStyles from './includeDigimonStyles';
import Button from '@material-ui/core/Button';
import Fields from './Fields/Fields';
import buildUrl from '../../utils/urls';
import { CircularProgress } from '@material-ui/core';
import consumeEndpoint from '../../utils/getEndpoint';

const DELAY = 1000;

function IncludeDigimon({ openIncludeModal, set_openIncludeModal, set_inMemoryDb, inMemoryDb }) {
  const classes = useStyles();

  const [includeStatus, set_includeStatus] = useState('notInitiated');
  const [name, set_name] = useState('');
  const [level, set_level] = useState('');
  const [img, set_img] = useState(null);

  function resetValues() {
    set_name('');
    set_level('');
    set_img(null);
  }

  async function handleInclude() {
    set_includeStatus('loading');

    let res = await consumeEndpoint(buildUrl());
    let data = [...res, ...inMemoryDb];
    for (let i = 0; i < data.length; i++) {
      let digimon = data[i];
      if (name.toLowerCase() === digimon.name.toLowerCase()) {
        resetValues();
        return set_includeStatus('error');
      }
    }
    set_inMemoryDb(prevRecords => {
      const newDigimon = {
        name,
        level,
        img
      }
      return [...prevRecords, newDigimon];
    });
    set_includeStatus('submited');
    setTimeout(() => resetValues(), DELAY);
  }


  const mapping = {
    'notInitiated': (
      <Fields
        name={name}
        set_name={set_name}
        level={level}
        set_level={set_level}
        img={img}
        set_img={set_img}
      />
    ),

    'loading': (
      <CircularProgress />
    ),

    'submited': (
      <h3>The digimon you entered was successfully included</h3>
    ),

    'error': (
      <h3>A digimon with that name already exists</h3>
    )
  }

  function handleClose() {
    setTimeout(() => set_includeStatus('notInitiated'), DELAY);
    setTimeout(() => resetValues(), DELAY);
    set_openIncludeModal(false);
  }

  function actions() {
    if (includeStatus === 'notInitiated') {
      return (
        <DialogActions>
          <Button
            disabled={name === '' || level === '' || img === null}
            variant="contained"
            color="primary"
            onClick={handleInclude}
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
