/* eslint-disable operator-linebreak */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  bookMission,
  getMissions,
  leaveMission,
} from '../redux/missions/missions';
import Mission from './Mission';

const Missions = () => {
  const { missions } = useSelector((state) => state.missions);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!missions.length) {
      dispatch(getMissions());
    }
  }, [dispatch, missions]);

  const joinMembershipHandler = (id) => {
    dispatch(bookMission(id));
  };

  const leaveMissionHandler = (id) => {
    dispatch(leaveMission(id));
  };

  return (
    <div className="mt-4 ">
      <table className="table table-bordered table-responsive table-striped">
        <thead>
          <tr>
            <th scope="col">Mission</th>
            <th scope="col">Description</th>
            <th scope="col">status</th>
            <th scope="col">{}</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <Mission
              key={mission.id}
              mission={mission}
              leaveMissionHandler={leaveMissionHandler}
              joinMembershipHandler={joinMembershipHandler}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
