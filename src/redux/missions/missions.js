import axios from 'axios';
/* eslint-disable */
const GET_MISSONS = 'spacetravel/missions/GET_MISSIONS';
// const MISSIONS_REQUEST = 'spacetravel/missions/MISSIONS_REQUEST';
// const MISSIONS_SUCCESS = 'spacetravel/missions/MISSIONS_SUCCESS';
const BOOK_MISSION = 'spacetravel/missions/BOOK_MISSION';
const LEAVE_MISSION = 'spacetravel/missions/LEAVE_MISSION';

export const getMissions = () => async (dispatch) => {
  const { data } = await axios.get('https://api.spacexdata.com/v3/missions');

  dispatch({ type: GET_MISSONS, payload: data });
};

export const bookMission = (id) => (dispatch) => {
  dispatch({ type: BOOK_MISSION, payload: id });
};

export const leaveMission = (id) => (dispatch) => {
  dispatch({ type: LEAVE_MISSION, payload: id });
};

const initialState = [];
const missions = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MISSONS:
      return [...state, payload];
    case BOOK_MISSION:
      return state.filter((mission) => {
        if (mission.mission_id !== payload) {
          return mission;
        }
        return { ...mission, reserved: true };
      });

    case BOOK_MISSION:
      return state.filter((mission) => {
        if (mission.mission_id !== payload) {
          return mission;
        }
        return { ...mission, reserved: false };
      });
    default:
      return state;
  }
};

export default missions;
