import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import isEmpty from 'lodash-es/isEmpty';
import Teaser from '../../components/Teaser';

import style from './style.module.scss';

import {
  FETCH_LISTINGS_REQUEST,
  FETCH_LISTINGS_SUCCESS,
  FETCH_LISTINGS_FAILURE
 } from '../../actions/types';

const Listings = (props) => {
  const listings = useSelector((state) => state.listings);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchListings() {
      dispatch({ type: FETCH_LISTINGS_REQUEST });

      try {
        const response = await fetch('https://api.spork.digital/test/');
        const jsonResponse = await response.json();
        if (jsonResponse && jsonResponse.results) {
          dispatch({ type: FETCH_LISTINGS_SUCCESS, payload: jsonResponse.results });
        }

      } catch (err) {
        console.log('ERROR FETCHING RESULTS:', err.message);
        dispatch({ type: FETCH_LISTINGS_FAILURE, payload: 'Sorry results are unavailable at this time, please refresh the page to try again' });
      }
    }

    fetchListings();

  }, [dispatch]);


  if (listings.isFetching) {
    return <div>Listings are loading...</div>;
  }

  if (listings.errorMessage) {
    return <div>{listings.errorMessage}</div>
  }

  if (isEmpty(listings.byId)) {
    return <div>Sorry there are no listings</div>
  }

  const results = listings.byId;
  const keys = Object.keys(results);

  return (
    <div className={style.grid}>
      { keys && keys.map((key) => {
        return (
          <div key={`${key}`} className={style.cell}>
            <Teaser {...results[key]} />
          </div>
        );
      })}
    </div>
  )
};

export default Listings;

