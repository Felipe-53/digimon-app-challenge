import React, { useState, useEffect } from 'react';
import { getEndpoint } from '../../utils/getEndpoint';

function Listing() {
  useEffect(
    (async () => {
      let digimons = await getEndpoint();
    })()
  , []);

  return (
    <div>
      
    </div>
  )
}

export default Listing
