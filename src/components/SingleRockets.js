import React from "react";

const SingleRockets = ({ rocket }) => (
  <div key={rocket.rocket_id}>
    <p>{rocket.rocket_name}</p>
    <p>
      <span className="badge bg-secondary">Reserved</span>
      {rocket.description}
    </p>
    <img src={rocket.flickr_images} alt="rocket_images" />
    <button type="button">Reserve Rocket</button>
  </div>
);

export default SingleRockets;
