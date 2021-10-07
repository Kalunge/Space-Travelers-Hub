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
    <div className="d-flex p-3 w-75" key={rocket.id}>
      <img className="img-rockets" src={rocket.image} alt="rocket_images" />
      <div className="p-3">
        <h3>{rocket.name}</h3>
        <p>
          {rocket.reserved && (
            <span className="badge bg-primary">Reserved</span>
          )}
          {rocket.description}
        </p>
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
    </div>
  );
};

export default SingleRockets;
