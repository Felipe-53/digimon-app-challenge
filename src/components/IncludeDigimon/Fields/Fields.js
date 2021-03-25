import React from 'react'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import getLevels from '../../../utils/getLevels';
import useStyles from './fieldsStyles';


function Fields({name, set_name, level, set_level, set_img}) {
  const classes = useStyles();

  function handleChooseFile(event) {
    set_img(event.target.files[0]);
  }

  return (
    <>
      <TextField
        className={classes.nameField}
        label="Name"
        value={name}
        onChange={event => set_name(event.target.value)}
      />

      <Select
        className={classes.levelField}
        value={level}
        onChange={event => set_level(event.target.value)}
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
