import React from 'react'
import logo from './digimon-logo.svg';
import BasePage from '../BasePage/BasePage'
import Info from './Info/Info';
import Actions from './Actions/Actions';

function Landing() {
  return (
    <BasePage>
      <img src={logo} alt="The digimon logo"/>
      <Info />
      <Actions />
    </BasePage>
  );
}

export default Landing
