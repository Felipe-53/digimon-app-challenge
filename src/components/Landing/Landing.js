import React, { useState } from 'react';
import logo from './digimon-logo.svg';
import Info from './Info/Info';
import LandingActions from './LandingActions/LadingActions';
import SearchDigimon from '../SearchDigimon/SearchDigimon';
import ViewDigimon from '../ViewDigimon/ViewDigimon';
import IncludeDigimon from '../IncludeDigimon/IncludeDigimon';
import useStyles from './landingStyles';

function Landing({searchType, set_searchType, searchValue, set_searchValue, fetchData, digimons, set_digimons, set_whichPage, set_inMemoryDb, inMemoryDb}) {
  const classes = useStyles();

  const [openSearchModal, set_openSearchModal] = useState(false);
  const [openIncludeModal, set_openIncludeModal] = useState(false);

  function defineModal() {
    if (digimons.length === 0) {
      return (
        <>
          <SearchDigimon
            searchType={searchType}
            set_searchType={set_searchType}
            searchValue={searchValue}
            set_searchValue={set_searchValue}
            openSearchModal={openSearchModal}
            set_openSearchModal={set_openSearchModal}
            set_whichPage={set_whichPage}
            fetchData={fetchData}
          />
          <IncludeDigimon
            openIncludeModal={openIncludeModal}
            set_openIncludeModal={set_openIncludeModal}
            set_inMemoryDb={set_inMemoryDb}
            inMemoryDb={inMemoryDb}
          />
        </>
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
        set_openIncludeModal={set_openIncludeModal}
      />
      {defineModal()}
    </>
  );
}

export default Landing;
