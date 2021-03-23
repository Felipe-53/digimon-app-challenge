import React, { useState, useEffect } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Filters from './Filters/Filters';
import useStyles from './searchDigimonStyles';

import Button from '@material-ui/core/Button';
import { BadApiResponseError } from '../../utils/errors';

function SearchDigimon({ openModal, set_openModal, searchType, set_searchType, searchValue, set_searchValue, fetchData, set_whichPage }) {
  const classes = useStyles();

  function changeFilter(event) {
    set_searchValue(null);
    set_searchType(event.target.value);
  }

  function handleSearchClick() {
    fetchData().then(data => {
      if (data instanceof BadApiResponseError) {
        return // error handling here
      }
      set_openModal(false);
      if (data.length > 1) {
        set_whichPage('listing');
      }
      set_searchType('name');
      set_searchValue(null);
    })
  }

  function handleClose() {
    set_openModal(false);
    set_searchType('name');
    set_searchValue(null);
  }

  return (
    <Dialog PaperProps={{style: {width: '60%'}}} open={openModal} onClose={handleClose}>
      <DialogTitle>Search Digimon</DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <Filters
          searchType={searchType}
          searchValue={searchValue}
          set_searchValue={set_searchValue}
          changeFilter={changeFilter}
        />
      </DialogContent>

      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearchClick}
        >
          SEARCH
        </Button>
        <Button
          variant="contained"
          color="secondary"
        >
          SERCH ALL
        </Button>
      </DialogActions>
    </Dialog>
  );
}



export default SearchDigimon;


