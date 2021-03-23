import React, { useState } from 'react';
import BasePage from '../BasePage/BasePage';
import DigimonTable from './DigimonTable/DigimonTable'

function Listing({ digimons }) {

  return (
    <BasePage>
      <DigimonTable
        digimons={digimons}
      />
    </BasePage>
  )
}

export default Listing
