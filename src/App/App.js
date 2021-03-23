import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import Landing from '../components/Landing/Landing';
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
        />
      )
    }

    if (digimons.length > 1) {
      //  to be changed
      return (
        null 
      )
    }
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
