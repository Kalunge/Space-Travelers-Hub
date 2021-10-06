import axios from 'axios';

const FETCH_ROCKETS = 'App/rockets/GET_ROCKETS';
const url = 'https://api.spacexdata.com/v3/rockets';

const initialState = ['initial state for rockets'];
const rocketsReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.payload;
    default:
      return state;
  }
};
export const fetchRockets = (payload) => ({
  type: FETCH_ROCKETS,
  payload,
});
export const getRockets = () => async (dispatch) => {
  const rocketsApi = await axios.get(url)
    .then((response) => response.data);
  dispatch(fetchRockets(rocketsApi));
};

export default rocketsReducers;
