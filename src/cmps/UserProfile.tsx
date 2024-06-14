import React from "react";
import Avatar from "@mui/material/Avatar";

const UserProfile: React.FC = () => {
  return (
    <div className="profile-container flex">
      <div className="top-section flex">
        <div className="avatar-container">
          <Avatar
            alt="Remy Sharp"
            className="custom-avatar"
            src="/img/diklacohen.jpg"
          />
        </div>
        <div className="add-name">
          <h1>Add name</h1>
        </div>
      </div>
      <div className="bottom-section">
        <div className="contact-container">
          <h2>Contact information</h2>
          <div className="contact-info">
            <p>olgamr@walla.com</p>
            <p>Add phone number</p>
            <p>Add location</p>
          </div>
        </div>
        <div className="preference-container">
          <h4>Preferences</h4>
          <div className="preferences-info">
            <p>Title</p>
            {/* <p>Full stack developer</p> */}
            <p>Job types</p>
            <p>On site, Hybrid, Remote</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
