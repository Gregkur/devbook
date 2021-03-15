import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentProfile } from "../../actions/profile";

import Spinner from "../layout/Spinner";

const Dashboard = ({
  auth: { user },
  profile: { profile, loading },
  getCurrentProfile,
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  return loading && profile == null ? (
    <Spinner />
  ) : (
    <>
      <h1 class="large text-primary">Dashboard</h1>
      <p class="lead">
        <i class="fas fa-user"></i> Welcome {user && user.name}
      </p>
      {console.log(user)}
      {profile !== null ? (
        <>
          {" "}
          <div class="dash-buttons">
            <a href="edit-profile.html" class="btn btn-light">
              <i class="fas fa-user-circle text-primary"></i> Edit Profile
            </a>
            <a href="add-experience.html" class="btn btn-light">
              <i class="fab fa-black-tie text-primary"></i> Add Experience
            </a>
            <a href="add-education.html" class="btn btn-light">
              <i class="fas fa-graduation-cap text-primary"></i> Add Education
            </a>
          </div>
        </>
      ) : (
        <>
          <p>You have not yet setup your profile, please add some info</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </>
      )}
    </>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});
export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
