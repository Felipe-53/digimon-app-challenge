import React, { useState } from 'react';
import DigimonTable from './DigimonTable/DigimonTable'

function Listing({ digimons }) {

  return (
    <>
      <DigimonTable
        digimons={digimons}
      />
    </>
  )
}

export default Listing
