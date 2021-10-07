import React from 'react';
import { useSelector } from 'react-redux';
import SingleRockets from './SingleRockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  console.log(rockets.rockets)
  return (
    <div>
      {rockets.rockets.map((rocket) => (
        <SingleRockets key={rocket.id} rocket={rocket} />
      ))}
    </div>
  );
};
export default Rockets;
