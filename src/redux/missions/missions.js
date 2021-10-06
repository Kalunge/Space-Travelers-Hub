import axios from 'axios';
/* eslint-disable */
const GET_MISSONS = 'spacetravel/missions/GET_MISSIONS';
// const MISSIONS_REQUEST = 'spacetravel/missions/MISSIONS_REQUEST';
// const MISSIONS_SUCCESS = 'spacetravel/missions/MISSIONS_SUCCESS';

export const getMissions = () => async (dispatch) => {
  const { data } = await axios.get('https://api.spacexdata.com/v3/missions');

  dispatch({ type: GET_MISSONS, payload: data });
};

const initialState = [];
const missions = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MISSONS:
      return [...state, payload];

    default:
      return state;
  }
};

export default missions;
