import React, { useState } from 'react';
import logo from './digimon-logo.svg';
import BasePage from '../BasePage/BasePage'
import Info from './Info/Info';
import Actions from './Actions/Actions';
import SearchDigimon from './SearchDigimon/SearchDigimon'

function Landing() {
  const [openModal, set_openModal] = useState(false);

  return (
    <BasePage>
      <img src={logo} alt="The digimon logo"/>
      <Info />
      <Actions
        set_openModal={set_openModal}
      />
      <SearchDigimon
        openModal={openModal}
        set_openModal={set_openModal}
      />
    </BasePage>
  );
}

export default Landing
