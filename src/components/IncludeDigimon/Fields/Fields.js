import React from 'react'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import getLevels from '../../../utils/getLevels';
import useStyles from './fieldsStyles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

function Fields({name, set_name, level, set_level, set_img}) {
  const classes = useStyles();

  function handleChooseFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = event => {
      set_img(event.target.result);
    };
    reader.readAsDataURL(file);
  }

  return (
    <>
      <TextField
        className={classes.nameField}
        label="Name"
        value={name}
        onChange={event => set_name(event.target.value)}
      />

      <FormControl>
        <InputLabel htmlFor="level-field">Level</InputLabel>
        <Select
          className={classes.levelField}
          value={level}
          onChange={event => set_level(event.target.value)}
          inputProps={{id: 'level-field'}}
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
      </FormControl>

      <input
        id="file-input"
        type="file"
        accept="image/jpeg"
        onChange={handleChooseFile}
      />
    </>
  )
}

export default Fields
