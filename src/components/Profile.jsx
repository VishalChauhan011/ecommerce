import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const isLoading = useSelector((state) => state.auth.isLoading);

  console.log("USER ==>", user)

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>User data not available.</p>;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
