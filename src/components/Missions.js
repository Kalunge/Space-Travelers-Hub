/* eslint-disable operator-linebreak */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  bookMission,
  getMissions,
  leaveMission,
} from '../redux/missions/missions';

const Missions = () => {
  const { missions } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  const joinMembershipHandler = (id) => {
    dispatch(bookMission(id));
  };

  const leaveMissionHandler = (id) => {
    dispatch(leaveMission(id));
  };

  return (
    <div className="mt-4 ">
      <table className="table table-bordered table-responsive">
        <thead>
          <tr>
            <th scope="col">Mission</th>
            <th scope="col">Description</th>
            <th scope="col">status</th>
            <th scope="col">{}</th>
          </tr>
        </thead>
        <tbody>
          {missions &&
            missions.map((item) => (
              <tr key={item.id}>
                <th scope="row">{item.name}</th>
                <td>{item.description}</td>
                {item.reserved ? (
                  <>
                    <td>
                      <button type="button" className="member-btn btn-primary">
                        ACTIVE MEMBER
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => leaveMissionHandler(item.id)}
                        type="button"
                        className="member-btn btn-danger"
                      >
                        LEAVE MISSION
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>
                      <button type="button" className="member-btn btn-dark">
                        NOT A MEMBER
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => joinMembershipHandler(item.id)}
                        type="button"
                        className="member-btn btn-light"
                      >
                        JOIN MISSION
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
