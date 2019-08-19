import React from 'react'

const Profile = ({ match }) => {
  return (
    <div>Profile page for profile with id {match.params.id}</div>
  )
};

export default Profile;

