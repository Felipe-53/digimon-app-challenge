import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import getLevels from '../../../utils/getLevels';
import useStyles from './filtersStyles';

function Filters({ changeFilter, searchType, set_searchValue, searchValue}) {
  const classes = useStyles();

  return (
    <>
      <RadioGroup className={classes.radioGroup} onChange={changeFilter} row={true} defaultValue="name">
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
            className={classes.inputs}
            value={searchValue} 
            onChange={e => set_searchValue(e.target.value)}
          /> :
          <Select
            className={classes.inputs}
            onChange={e => set_searchValue(e.target.value)}
          >
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
    </>
  )
}

export default Filters
