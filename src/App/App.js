import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import Landing from '../components/Landing/Landing';
import Listing from '../components/Listing/Listing';
import buildUrl from '../utils/urls';
import consumeEndpoint from '../utils/getEndpoint';


function App() {
  const [digimons, set_digimons] = useState([]);
  const [searchType, set_searchType] = useState('name');
  const [searchValue, set_searchValue] = useState(null);
  const [fetchError, set_fetchError] = useState(false);


  const fetchData = async () => {
    const url = buildUrl(searchType, searchValue);
    let data = await consumeEndpoint(url);
    if (data === "error") {
      return set_fetchError(true);
    }
    set_digimons(data);
  }

  function defineRenderPage() {
    if (digimons.length === 0 || digimons.length === 1) {
      return (
        <Landing
          searchType={searchType}
          set_searchType={set_searchType}
          searchValue={searchValue}
          set_searchValue={set_searchValue}
          fetchData={fetchData}
          digimons={digimons}
          set_digimons={set_digimons}
        />
      )
    }

    return (
      <Listing
        digimons={digimons}
        searchType={searchType}
        set_searchType={set_searchValue}
        searchValue={searchValue}
        set_searchValue={set_searchValue}
        fetchData={fetchData}
        set_digimons={set_digimons}
      />
    )
    
  }

  return (
    <div className="App">
      {
        defineRenderPage()
      }
    </div>
  );
}

export default App;
