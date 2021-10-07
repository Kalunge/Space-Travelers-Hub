import axios from 'axios';

const FETCH_ROCKETS = 'App/rockets/GET_ROCKETS';
const url = 'https://api.spacexdata.com/v3/rockets';

const initialState = [];
const rocketsReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return {...state, rockets: action.payload}
    default:
      return state;
  }
};
export const fetchRockets = (payload) => ({
  type: FETCH_ROCKETS,
  payload,
});
export const getRockets = () => async (dispatch) => {
  const {data} = await axios.get(url)
  const rockets = []
  data.forEach((rocket) => {
    const newRocket = {
      id: rocket.id,
      name: rocket.rocket_name,
      description: rocket.description,
      image: rocket.flickr_images[0],
      reserved: false
      
    }
    rockets.push(newRocket)
  }) 
  dispatch(fetchRockets(rockets));
};

export default rocketsReducers;
