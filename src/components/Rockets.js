import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/rockets/rockets';
import SingleRockets from './SingleRockets';

const Rockets = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!rockets.length) {
      dispatch(getRockets());
    }
  }, [dispatch, rockets]);
  return (
    <div>
      {rockets.map((rocket) => (
        <SingleRockets key={rocket.id} rocket={rocket} />
      ))}
    </div>
  );
};
export default Rockets;
