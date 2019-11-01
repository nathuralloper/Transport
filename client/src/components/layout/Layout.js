import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Alert from "./Alert";

const Layout = ({ auth: { isAuthenticated } }) => {
  console.log(isAuthenticated);
  const _layout = (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
      <Navbar />
      <div className="app-main">
        <Sidebar />
        <Alert />
      </div>
    </div>
  );

  return <Fragment>{isAuthenticated ? _layout : ""}</Fragment>;
};

Layout.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Layout);
