import React from 'react';
import MaterialBar from '@material-ui/core/AppBar';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './appBarStyles';

function AppBar() {
  const classes = useStyles();

  return (
    <MaterialBar 
      className={classes.AppBar}
      position="sticky"
    >
      <span className={classes.logo}>DIGIMON APP</span>
      <input />
    </MaterialBar>
  );
}


const digimons = [
  {
  "name": "Koromon",
  "img": "https://digimon.shadowsmith.com/img/koromon.jpg",
  "level": "In Training"
  },
  {
  "name": "Tsunomon",
  "img": "https://digimon.shadowsmith.com/img/tsunomon.jpg",
  "level": "In Training"
  },
  {
  "name": "Yokomon",
  "img": "https://digimon.shadowsmith.com/img/yokomon.jpg",
  "level": "In Training"
  },
  {
  "name": "Motimon",
  "img": "https://digimon.shadowsmith.com/img/motimon.jpg",
  "level": "In Training"
  },
  {
  "name": "Tanemon",
  "img": "https://digimon.shadowsmith.com/img/tanemon.jpg",
  "level": "In Training"
  },
  {
  "name": "Bukamon",
  "img": "https://digimon.shadowsmith.com/img/bukamon.jpg",
  "level": "In Training"
  },
  {
  "name": "Tokomon",
  "img": "https://digimon.shadowsmith.com/img/tokomon.jpg",
  "level": "In Training"
  },
  {
  "name": "Agumon",
  "img": "https://digimon.shadowsmith.com/img/agumon.jpg",
  "level": "Rookie"
  },
  {
  "name": "Gabumon",
  "img": "https://digimon.shadowsmith.com/img/gabumon.jpg",
  "level": "Rookie"
  },
  {
  "name": "Biyomon",
  "img": "https://digimon.shadowsmith.com/img/biyomon.jpg",
  "level": "Rookie"
  },
  {
  "name": "Tentomon",
  "img": "https://digimon.shadowsmith.com/img/tentomon.jpg",
  "level": "Rookie"
  },
  {
  "name": "Palmon",
  "img": "https://digimon.shadowsmith.com/img/palmon.jpg",
  "level": "Rookie"
  },
  {
  "name": "Gomamon",
  "img": "https://digimon.shadowsmith.com/img/gomamon.jpg",
  "level": "Rookie"
  },
  {
  "name": "Mokumon",
  "img": "https://digimon.shadowsmith.com/img/mokumon.jpg",
  "level": "Fresh"
  },
  {
  "name": "Omnimon",
  "img": "https://digimon.shadowsmith.com/img/omnimon.jpg",
  "level": "Mega"
  }
]


export default AppBar
