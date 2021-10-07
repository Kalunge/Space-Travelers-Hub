import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { missions } = useSelector((state) => state.missions);
  const { rockets } = useSelector((state) => state.rockets);

  return (
    <div className="profile">
      <div className="missions-profile">
        <h3>My Missions</h3>
        {missions.map((mission) => mission.reserved && <p>{mission.name}</p>)}
      </div>
      <div className="rockets-profile ml-5">
        <h3>My Rockets</h3>
        {rockets.map((rocket) => rocket.reserved && <p>{rocket.name}</p>)}
      </div>
    </div>
  );
};

export default Profile;
