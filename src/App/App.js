import React, { useState, useEffect } from 'react';
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

  const fetchData = async () => {
    const url = buildUrl(searchType, searchValue);
    let data = await consumeEndpoint(url);
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
