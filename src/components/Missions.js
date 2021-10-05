import React from 'react';

const Missions = () => {
  const desc = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.facere blanditiis nesciunt suscipit.';
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
          <tr>
            <th scope="row">Thaitom</th>
            <td>{desc}</td>
            <td>
              <button type="button">NOT A MEMBER</button>
            </td>
            <button type="button">JOIN MISSION</button>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
