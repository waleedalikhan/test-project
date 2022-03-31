import React from "react";
import labels from "../locales/en.json";
import PropTypes from "prop-types";

const DisplayKnowIps = (ips) => {
  return (
    <>
      {ips.map((ip) => {
        return (
          <React.Fragment key={ip}>
            <p>{ip}</p>
          </React.Fragment>
        );
      })}
    </>
  );
};

DisplayKnowIps.protoTypes = {
  ips: PropTypes.array.isRequired,
};

const ProfileComponent = ({ img, firstName, lastName, username, knowIps }) => {
  return (
    <>
      <div className="profile">
        <div className="profile__img">
          <img src={img} alt="" />
        </div>
        <div className="profile__details">
          <div className="profile__details_name">
            <span>{labels.name}:</span>
            <p>
              {firstName} {lastName}
            </p>
          </div>
          <div className="profile__details_username">
            <span>{labels.username}:</span>
            <p>{username}</p>
          </div>
          <div className="profile__details_knownIps">
            <span>{labels.know_ips}:</span>
            <div className="profile__details_knownIps_ips">
              {DisplayKnowIps(knowIps)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ProfileComponent.propTypes = {
  img: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  knowIps: PropTypes.array.isRequired,
};

export default ProfileComponent;
