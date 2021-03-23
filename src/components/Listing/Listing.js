import React, { useState } from 'react';
import ViewDigimon from '../ViewDigimon/ViewDigimon';
import DigimonTable from './DigimonTable/DigimonTable'

function Listing({ digimons, set_digimons }) {

  return (
    <>
      <DigimonTable
        digimons={digimons}
        set_digimons={set_digimons}
      />
      <ViewDigimon
        digimons={digimons}
        set_digimons={set_digimons}
      />
    </>
  )
}

export default Listing
