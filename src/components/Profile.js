import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { missions } = useSelector((state) => state.missions);

  return (
    <div className="profile">
      <div className="missions-profile">
        <h3>My Missions</h3>
        {missions.map((mission) => mission.reserved && <p>{mission.name}</p>)}
      </div>
      <div className="rockets-profile">
        <h3>My Rockets</h3>
        <p>Falcon</p>
      </div>
    </div>
  );
};

export default Profile;
