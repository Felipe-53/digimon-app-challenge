import React, { useState, useEffect } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import useStyles from './searchDigimonStyles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import getLevels from '../../../utils/getLevels'
import Button from '@material-ui/core/Button';

function SearchDigimon({ openModal, set_openModal, searchType, set_searchType, searchValue, set_searchValue, fetchData }) {
  const classes = useStyles();

  function changeFilter(event) {
    set_searchType(event.target.value);
  }

  useEffect(() => {

  }, []);

  return (
    <Dialog PaperProps={{style: {width: '60%'}}} open={openModal} onClose={() => set_openModal(false)}>
      <DialogTitle>Search Digimon</DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <RadioGroup  onChange={changeFilter} row={true} defaultValue="name">
          <FormControlLabel
            value="name"
            control={<Radio color="primary" />}
            label="Name"
            labelPlacement="top"
          />
          
          <FormControlLabel
            value="level"
            control={<Radio color="primary" />}
            label="Level"
            labelPlacement="top"
          />
        </RadioGroup>

        {
          searchType === "name"?
          <TextField
            value={searchValue} 
            onChange={e => set_searchValue(e.target.value)}
          /> :
          <Select onChange={e => set_searchValue(e.target.value)}>
            {getLevels().map(level => {
              return (
                <MenuItem
                  key={level}
                  value={level}
                >
                  {level}
                </MenuItem>
              );
            })}
          </Select>
        }
      </DialogContent>

      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          onClick={fetchData}
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


