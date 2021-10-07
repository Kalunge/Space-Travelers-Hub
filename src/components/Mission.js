import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({ mission, leaveMissionHandler, joinMembershipHandler }) => {
  const {
    id, name, description, reserved,
  } = mission;

  return (
    <>
      <tr key={id}>
        <th scope="row">{name}</th>
        <td>{description}</td>
        {reserved ? (
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
                onClick={() => leaveMissionHandler(id)}
              >
                LEAVE MISSION
              </button>
            </td>
          </>
        ) : (
          <>
            <td>
              <span className="badge bg-dark mission-badge">NOT A MEMBER</span>
            </td>
            <td>
              <button
                onClick={() => joinMembershipHandler(id)}
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
    </>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
  leaveMissionHandler: PropTypes.func.isRequired,
  joinMembershipHandler: PropTypes.func.isRequired,
};

export default Mission;
