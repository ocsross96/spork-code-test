import React, { useState, useEffect } from 'react'
import Teaser from '../../components/Teaser';

import style from './style.module.scss';

const Listings = (props) => {
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getListings() {
      try {
        const response = await fetch('https://api.spork.digital/test/');
        const jsonResponse = await response.json();
        if (jsonResponse && jsonResponse.results) {
          setListings(jsonResponse.results);
          setIsLoading(false);
          console.log(jsonResponse.results);
        }
      } catch (err) {
        console.log(err);
      }
    }

    getListings();
  }, []);

  if (isLoading) {
    return <div>Listings are loading...</div>;
  }

  if (!listings) {
    return <div>Sorry there no listings, please come back tommorow</div>
  }

  return (
    <div className={style.grid}>
      {listings.length && listings.map((listing, index) => {
        return (
          <div key={`${index}-${listing.roomTitle}`} className={style.col}>
            <Teaser {...listing} />
          </div>
        );
      })}
    </div>
  )
};

export default Listings;

