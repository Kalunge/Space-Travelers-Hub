/* eslint-disable operator-linebreak */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <div className="mt-4 ">
      <table className="table table-bordered table-responsive">
        git
        <thead>
          <tr>
            <th scope="col">Mission</th>
            <th scope="col">Description</th>
            <th scope="col">status</th>
            <th scope="col">{}</th>
          </tr>
        </thead>
        <tbody>
          {missions[0] &&
            missions[0].map((item) => (
              <tr key={item.mission_id}>
                <th scope="row">{item.mission_name}</th>
                <td>{item.description}</td>
                <td>
                  <button type="button" className="member-btn btn-primary">
                    ACTIVE MEMBER
                  </button>
                </td>
                <td>
                  <button type="button" className="member-btn btn-danger">
                    LEAVE MISSION
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
