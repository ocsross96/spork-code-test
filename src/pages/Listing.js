import React from 'react'

const Listing = ({ match }) => {
  return (
    <div>Listing page for room with id {match.params.id}</div>
  )
};

export default Listing;

