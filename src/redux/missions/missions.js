import axios from 'axios';

const GET_MISSONS = 'spacetravel/missions/GET_MISSIONS';
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

export const bookMission = (id) => ({
  type: BOOK_MISSION,
  payload: id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  payload: id,
});

const initialState = {
  missions: [],
};
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
