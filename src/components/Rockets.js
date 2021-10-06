import React from 'react';
import { useSelector } from 'react-redux';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  return (
    <div>
      {rockets.map((rocket) => (
        <div key={rocket.rocket_id}>
          <p>{rocket.rocket_name}</p>
          <p>{rocket.description}</p>
          <img src={rocket.flickr_images} alt="rocket_images" />
        </div>
      ))}
    </div>
  );
};
export default Rockets;
