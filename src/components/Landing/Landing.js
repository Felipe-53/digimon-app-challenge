import React, { useState } from 'react';
import logo from './digimon-logo.svg';
import BasePage from '../BasePage/BasePage'
import Info from './Info/Info';
import Actions from './Actions/Actions';
import SearchDigimon from './SearchDigimon/SearchDigimon'
import ViewDigimon from '../ViewDigimon/ViewDigimon'

function Landing({searchType, set_searchType, searchValue, set_searchValue, fetchData, digimons, set_digimons}) {
  const [openModal, set_openModal] = useState(false);

  function defineModal() {
    if (digimons.length === 0) {
      return (
        <SearchDigimon
        searchType={searchType}
        set_searchType={set_searchType}
        searchValue={searchValue}
        set_searchValue={set_searchValue}
        openModal={openModal}
        set_openModal={set_openModal}
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
    <BasePage>
      <img src={logo} alt="The digimon logo"/>
      <Info />
      <Actions
        set_openModal={set_openModal}
      />
      {defineModal()}
    </BasePage>
  );
}

export default Landing
