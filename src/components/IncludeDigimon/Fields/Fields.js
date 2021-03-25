import React from 'react'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import getLevels from '../../../utils/getLevels';


function Fields({name, set_name, level, set_level}) {
  return (
    <>
      <TextField
        label="Name"
        value={name}
        onChange={event => set_name(event.target.value)}
      />

      <Select
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
    </>
  )
}

export default Fields
