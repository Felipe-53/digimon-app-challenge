import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';


function Filters({searchType, set_searchType}) {


  return (
    <>
      <Select
        value={searchType}
        onChange={event => set_searchType(event.target.value)}
      >
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="level">Level</MenuItem>
      </Select>
    </>
  )
}

export default Filters
