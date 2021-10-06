import React from 'react';
import { useSelector } from 'react-redux';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  return (
    <div>
      {rockets.map((rocket) => (
        <div key={rocket.rocket_id}>
          {rocket.rocket_name }
          {rocket.description }
          {rocket.flickr_images }
        </div>
      ))}
    </div>
  );
};
export default Rockets;
