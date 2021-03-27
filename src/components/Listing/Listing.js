import React from 'react';
import ViewDigimon from '../ViewDigimon/ViewDigimon';
import DigimonTable from './DigimonTable/DigimonTable'

function Listing({ fetchedApiData, digimons, set_digimons }) {

  return (
    <>
      <DigimonTable
        fetchedApiData={fetchedApiData}
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
