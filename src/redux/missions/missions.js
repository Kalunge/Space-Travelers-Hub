import axios from 'axios';
/* eslint-disable */
const GET_MISSONS = 'spacetravel/missions/GET_MISSIONS';
// const MISSIONS_REQUEST = 'spacetravel/missions/MISSIONS_REQUEST';
// const MISSIONS_SUCCESS = 'spacetravel/missions/MISSIONS_SUCCESS';
const BOOK_MISSION = 'spacetravel/missions/BOOK_MISSION';
const LEAVE_MISSION = 'spacetravel/missions/LEAVE_MISSION';

export const getMissions = () => async (dispatch) => {
  const { data } = await axios.get('https://api.spacexdata.com/v3/missions');
  const result = [];
  data.forEach((item) => {
    const newMission = {
      id: item.mission_id,
      name: item.mission_name,
      reserved: false,
      description: item.description,
    };
    result.push(newMission);
  });

  dispatch({ type: GET_MISSONS, payload: result });
};

export const bookMission = (payload) => (dispatch) => {
  dispatch({ type: BOOK_MISSION, payload });
};

export const leaveMission = (payload) => (dispatch) => {
  dispatch({ type: LEAVE_MISSION, payload });
};

const initialState = { missions: [] };
const missions = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MISSONS:
      return {
        ...state,
        missions: payload,
      };
    case BOOK_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.id !== payload) {
            return mission;
          }
          return { ...mission, reserved: true };
        }),
      };

    case LEAVE_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.id !== payload) {
            return mission;
          }
          return { ...mission, reserved: false };
        }),
      };
    default:
      return state;
  }
};

export default missions;
