import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const UserItem = props => {
  return (
    <div>
      <div className="card text-center">
        <img
          src={props.image}
          alt={props.name}
          className="round-img"
          style={{ width: "60px" }}
        ></img>
        <h3>{props.name}</h3>
        <div>
          <Link
            to={`/user/${props.name}`}
            className="btn btn-sm btn-primary my-1 "
          >
            Check
          </Link>
        </div>
      </div>
    </div>
  );
};
UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
