import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import Landing from '../components/Landing/Landing';
import buildUrl from '../utils/urls';
import getEndpoint from '../utils/getEndpoint';

function App() {
  const [digimons, set_digimons] = useState([]);
  const [searchType, set_searchType] = useState('name');
  const [searchValue, set_searchValue] = useState(null);


  const fetchData = async () => {
    const url = buildUrl(searchType, searchValue);
    let data = getEndpoint(url);
    set_digimons(data);
  }

  function defineRenderPage() {
    if (digimons.length === 0) {
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

    if (digimons.length === 1) {
      //  to be changed
      return (
        null 
      )
    }

    //  to be changed
    return null;
  }

  return (
    <div className="App">
      {defineRenderPage()}
    </div>
  );
}

export default App;
