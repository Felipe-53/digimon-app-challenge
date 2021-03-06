import React, { useState } from 'react';
import './App.css';
import './index.css';
import Landing from '../components/Landing/Landing';
import Listing from '../components/Listing/Listing';
import buildUrl from '../utils/urls';
import consumeEndpoint from '../utils/getEndpoint';
import BasePage from '../components/BasePage/BasePage';

function App() {
  const [digimons, set_digimons] = useState([]);
  const [searchType, set_searchType] = useState('name');
  const [searchValue, set_searchValue] = useState(null);
  const [fetchedApiData, set_fetchedApiData] = useState(null);
  const [whichPage, set_whichPage] = useState('landing');
  const [inMemoryDb, set_inMemoryDb] = useState([]);

  function getDataFromMemory() {
    if (searchType === 'name') {
      for (let i = 0; i < inMemoryDb.length; i++) {
        if (inMemoryDb[i].name.toLowerCase() === searchValue.toLowerCase()) {
          let match = inMemoryDb[i];
          return [match];
        }
      }
      return [];
    }
    
    return inMemoryDb.filter(digimon => {
      if (digimon.level === searchValue) {
        return digimon;
      }
    });
  }

  const fetchData = async () => {
    let memoryData = getDataFromMemory();
    if (searchType === 'name' && memoryData.length === 1) {
      set_fetchedApiData(memoryData);
      set_digimons(memoryData);
      return memoryData;
    }
    const url = buildUrl(searchType, searchValue);
    let data = await consumeEndpoint(url);
    data = [...data, ...memoryData];
    set_fetchedApiData(data);
    set_digimons(data);
    return data;
  }

  const mapping = {
    'landing': (
      <Landing
        searchType={searchType}
        set_searchType={set_searchType}
        searchValue={searchValue}
        set_searchValue={set_searchValue}
        fetchData={fetchData}
        digimons={digimons}
        set_digimons={set_digimons}
        set_whichPage={set_whichPage}
        inMemoryDb={inMemoryDb}
        set_inMemoryDb={set_inMemoryDb}
      />
    ),

    'listing': (
      <Listing
        digimons={digimons}
        searchType={searchType}
        set_searchType={set_searchValue}
        searchValue={searchValue}
        set_searchValue={set_searchValue}
        fetchData={fetchData}
        set_digimons={set_digimons}
        fetchedApiData={fetchedApiData}
      />
    )
  }

  function backToLanding() {
    set_digimons([]);
    set_whichPage('landing');
  }

  return (
    <div className="App">
      <BasePage backToLanding={backToLanding}>
        {mapping[whichPage]}
      </BasePage>
    </div>
  );
}

export default App;
