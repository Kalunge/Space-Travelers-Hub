/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { cancelRocket, reserveRocket } from '../redux/rockets/rockets';

const SingleRockets = ({ rocket }) => {
  const dispatch = useDispatch();

  const handleReservation = (id) => {
    dispatch(reserveRocket(id));
  };

  const handleCancellation = (id) => {
    dispatch(cancelRocket(id));
  };
  return (
    <div key={rocket.id}>
      <p>{rocket.name}</p>
      <p>
        {rocket.reserved && (
          <span className="badge bg-secondary">Reserved</span>
        )}
        {rocket.description}
      </p>
      <img src={rocket.image} alt="rocket_images" />
      {rocket.reserved ? (
        <button
          type="button"
          className="btn-light"
          onClick={() => handleCancellation(rocket.id)}
        >
          Cancel Reservation
        </button>
      ) : (
        <button
          onClick={() => handleReservation(rocket.id)}
          type="button"
          className="btn-primary"
        >
          Reserve Rocket
        </button>
      )}
    </div>
  );
};

export default SingleRockets;
