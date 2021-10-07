import axios from 'axios';

const FETCH_ROCKETS = 'App/rockets/GET_ROCKETS';
const RESERVE_ROCKET = 'App/rockets/RESERVE_ROCKET';
const CANCEL_ROCKET_RESERVATION = 'App/rockets/CANCEL_ROCKET_RESERVATION';
const url = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = (payload) => ({
  type: FETCH_ROCKETS,
  payload,
});

export const getRockets = () => async (dispatch) => {
  const { data } = await axios.get(url);
  const rockets = [];
  data.forEach((rocket) => {
    const newRocket = {
      id: rocket.id,
      name: rocket.rocket_name,
      description: rocket.description,
      image: rocket.flickr_images[0],
      reserved: false,
    };
    rockets.push(newRocket);
  });
  dispatch(fetchRockets(rockets));
};

export const reserveRocket = (id) => async (dispatch) => {
  dispatch({ type: RESERVE_ROCKET, payload: id });
};

export const cancelRocket = (id) => async (dispatch) => {
  dispatch({ type: CANCEL_ROCKET_RESERVATION, payload: id });
};

const initialState = { rockets: [] };
const rocketsReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return { ...state, rockets: action.payload };
    case RESERVE_ROCKET:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id !== action.payload) {
            return rocket;
          }
          return { ...rocket, reserved: true };
        }),
      };

    case CANCEL_ROCKET_RESERVATION:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id !== action.payload) {
            return rocket;
          }
          return { ...rocket, reserved: false };
        }),
      };
    default:
      return state;
  }
};
export default rocketsReducers;
