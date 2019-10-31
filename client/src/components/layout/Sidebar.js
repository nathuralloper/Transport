import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Sidebar = ({ auth: { isAuthenticated } }) => {
  isAuthenticated = true;
  const _sidebar = (
    <div className="app-sidebar sidebar-shadow">
      <div className="app-header__logo">
        <div className="logo-src"></div>
        <div className="header__pane ml-auto">
          <div>
            <button
              type="button"
              className="hamburger close-sidebar-btn hamburger--elastic"
              data-className="closed-sidebar"
            >
              <span className="hamburger-box">
                fgldg
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="app-header__mobile-menu">
        <div>
          <button
            type="button"
            className="hamburger hamburger--elastic mobile-toggle-nav"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
      <div className="app-header__menu">
        <span>
          <button
            type="button"
            className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
          >
            <span className="btn-icon-wrapper">
              <i className="fa fa-ellipsis-v fa-w-6"></i>
            </span>
          </button>
        </span>
      </div>
      <div className="scrollbar-sidebar">
        <div className="app-sidebar__inner">
          <ul className="vertical-nav-menu">
            {/*<li className="app-sidebar__heading">Dashboards</li>
            <li>
              <a href="index.html" className="mm-active">
                <i className="metismenu-icon pe-7s-rocket"></i>
                Dashboard Example 1
              </a>
            </li>
            */}
            <li className="app-sidebar__heading">OPCIONES</li>
            <li>
              <Link to={"/"}>
                <i className="metismenu-icon pe-7s-car"></i>
                Configuraciones
                <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
              </Link>
              <ul>
                <li>
                  <Link to={"/routes"}>
                    <i className="metismenu-icon"></i>Rutas
                  </Link>
                </li>
                <li>
                  <Link to={"/bus"}>
                    <i className="metismenu-icon"></i>Autobuses
                  </Link>
                </li>
                <li>
                  <Link to={"/drivers"}>
                    <i className="metismenu-icon"></i>Choferes
                  </Link>
                </li>
                <li>
                  <Link to={"/stations"}>
                    <i className="metismenu-icon"></i>Estaciones
                  </Link>
                </li>
              </ul>
            </li>
            {/*<li>
              <a href="tables-regular.html">
                <i className="metismenu-icon pe-7s-display2"></i>
                Tables
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );

  return <Fragment>{isAuthenticated ? _sidebar : ""}</Fragment>;
};

Sidebar.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Sidebar);
