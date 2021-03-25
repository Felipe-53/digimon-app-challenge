import React, { useState } from 'react';
import logo from './digimon-logo.svg';
import Info from './Info/Info';
import LandingActions from './LandingActions/LadingActions';
import SearchDigimon from '../SearchDigimon/SearchDigimon';
import ViewDigimon from '../ViewDigimon/ViewDigimon'
import useStyles from './landingStyles';

function Landing({searchType, set_searchType, searchValue, set_searchValue, fetchData, digimons, set_digimons, set_whichPage}) {
  const classes = useStyles();

  const [openSearchModal, set_openSearchModal] = useState(false);

  function defineModal() {
    if (digimons.length === 0) {
      return (
        <SearchDigimon
          searchType={searchType}
          set_searchType={set_searchType}
          searchValue={searchValue}
          set_searchValue={set_searchValue}
          openModal={openSearchModal}
          set_openModal={set_openSearchModal}
          set_whichPage={set_whichPage}
          fetchData={fetchData}
        />
      );
    } else if(digimons.length === 1) {
      return (
        <ViewDigimon
          digimons={digimons}
          set_digimons={set_digimons}
        />
      );
    }
  }

  return (
    <>
      <img className={classes.hero} src={logo} alt="The digimon logo"/>
      <Info />
      <LandingActions
        set_openSearchModal={set_openSearchModal}
      />
      {defineModal()}
    </>
  );
}

export default Landing
