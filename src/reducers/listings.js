import keyBy from 'lodash-es/keyBy';

import {
  FETCH_LISTINGS_REQUEST,
  FETCH_LISTINGS_SUCCESS,
  FETCH_LISTINGS_FAILURE
 } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_LISTINGS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_LISTINGS_SUCCESS:
      const byId = keyBy(action.payload, 'uuid');

      return {
        ...state,
        byId,
        isFetching: false
      };
    case FETCH_LISTINGS_FAILURE:
        return {
          ...state,
          errorMessage: action.payload,
          isFetching: false
        };
    default:
      return state;
  }
}