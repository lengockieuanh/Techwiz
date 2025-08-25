import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function UserProfile() {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([]);

  //fetch profiles from api
  const fetchProfiles = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/user_profiles`);
      const data = await res.json();
      setProfiles(data);
    } catch (error) {
      console.error("Error after fetching profiles: ", error);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);
  return (
    <div>
      <h2>My profile</h2>
      <h1>Personal Information</h1>
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Action</th>
        </thead>
        <tbody>
          {profiles.map((profile) => (
            <div key={profile.id}>
              <div>{profile.id}</div>
              <div>{profile.last_name}</div>
              <div>{profile.first_name}</div>
              <div>{profile.middle_name}</div>
              <div>{profile.dob}</div>
              <div>{profile.email}</div>
              <div>{profile.phone_number}</div>
              <div>{profile.contry}</div>
              <div>{profile.gender}</div>
              <div>{profile.password}</div>
              <div>{profile.new_password}</div>
              <div>{profile.confirm_new_password}</div>
              <div><button onClick={()=>{navigate(`/user_profiles/edit/${profile.id}`)}}>Edit</button> </div>
            </div>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserProfile;
