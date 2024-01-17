import React from "react";
import { useSelector } from "react-redux";
const Profile = () => {
  const { user } = useSelector((state) => {
    return state.auth;
  });
  return (
    <div>
      <div className="profile-container">
        <div className="user-info">
          <div className="info">
            <div className="username">
              {user.data.username}
              {user.data.id}
            </div>
          </div>
          <div className="profile-image">Some image here</div>
        </div>
        <div className="shop-history">
          <div className="">shopping data here</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
