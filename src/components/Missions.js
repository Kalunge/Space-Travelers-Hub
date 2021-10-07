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
          {missions &&
            missions.map((item) => (
              <tr key={item.id}>
                <th scope="row">{item.name}</th>
                <td>{item.description}</td>
                {item.reserved ? (
                  <>
                    <td>
                      <span className="badge bg-primary mission-badge">
                        ACTIVE MEMBER
                      </span>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="member-btn btn-danger"
                        data-testid="leave"
                        onClick={() => leaveMissionHandler(item.id)}
                      >
                        LEAVE MISSION
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>
                      <span className="badge bg-dark mission-badge">
                        NOT A MEMBER
                      </span>
                    </td>
                    <td>
                      <button
                        onClick={() => joinMembershipHandler(item.id)}
                        type="button"
                        className="member-btn btn-light"
                        data-testid="join"
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
