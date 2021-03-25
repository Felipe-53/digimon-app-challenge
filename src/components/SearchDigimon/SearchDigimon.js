import React, { useState, useEffect } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Filters from './Filters/Filters';
import useStyles from './searchDigimonStyles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import { BadRequestError } from '../../utils/errors';

function SearchDigimon({ openSearchModal, set_openSearchModal, searchType, set_searchType, searchValue, set_searchValue, fetchData, set_whichPage }) {
  const classes = useStyles();

  const [searchStatus, set_searchStatus] = useState('notInitiated');

  const mapping = {
    'notInitiated': (
      <Filters
        searchType={searchType}
        searchValue={searchValue}
        set_searchValue={set_searchValue}
        changeFilter={changeFilter}
      />
    ),

    'loading': (
      <CircularProgress />
    ),

    'badRequestError': (
      <h3>We couldn't find what you were looking for</h3>
    ),

    'unexpectedError': (
      <h3>An unexpected error happened :(</h3>
    )
  }

  function changeFilter(event) {
    set_searchValue(null);
    set_searchType(event.target.value);
  }

  function handleSearchClick() {
    set_searchStatus('loading');

    fetchData()
      .then(data => {
        set_openSearchModal(false);
        if (data.length > 1) {
          set_whichPage('listing');
        }
        set_searchType('name');
        set_searchValue(null);
      })
      .catch(err => {
        if (err instanceof BadRequestError) {
          return set_searchStatus('badRequestError');
        }

        set_searchStatus('unexpectedError');
      })
  }

  function handleClose() {
    set_openSearchModal(false);
    set_searchType('name');
    set_searchValue(null);
    setTimeout(() => set_searchStatus('notInitiated'), 100);
  }

  function actions() {
    if (searchStatus === 'notInitiated') {
      return (
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
      );
    }

    return null;
  }

  return (
    <Dialog PaperProps={{style: {width: '60%'}}} open={openSearchModal} onClose={handleClose}>
      <DialogTitle>Search Digimon</DialogTitle>
      <DialogContent className={classes.dialogContent}>
        {mapping[searchStatus]}
      </DialogContent>

      {actions()}
    </Dialog>
  );
}

export default SearchDigimon;
