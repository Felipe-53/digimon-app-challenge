import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles({
  info: {
    margin: '2rem',
    maxWidth: '50%',
    textAlign: 'justify',
    textJustify: 'inter-word',
    
  }
})


function Info() {
  const classes = useStyles();

  return (
    <div className={classes.info}>
      <Typography>
        Digimon include almost all the creatures that reside within a parallel universe called the "Digital World."
        There are many different species of Digimon, as well as unconfirmed and new generations of Digimon yet to be revealed.
        The number of Digimon species continuously increases as the Digital World expands each year.
      </Typography>
    </div>
  )
}

export default Info
