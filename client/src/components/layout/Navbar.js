import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../action/auth";

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const _navbar = (
    <div className="app-header header-shadow">
      <div className="app-header__logo">
        <div className="">
          <center>
            <h5>TransportOnline</h5>
          </center>
        </div>
        <div className="header__pane ml-auto"></div>
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
      <div className="app-header__content">
        <div className="app-header-left">
          <div className="search-wrapper">
            <div className="input-holder">
              <input
                type="text"
                className="search-input"
                placeholder="Type to search"
              />
              <button className="search-icon">
                <span></span>
              </button>
            </div>
            <button className="close"></button>
          </div>
          <ul className="header-menu nav">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                <i className="nav-link-icon fa fa-database"> </i>
                Estadistica
              </Link>
            </li>
            <li className="btn-group nav-item">
              <button
                type="button"
                onClick={() => logout()}
                className="mt-2 btn btn-primary"
              >
                Cerrar sesion
              </button>
            </li>
            <li className="dropdown nav-item">
              <Link to={"/"} class="nav-link">
                <i className="nav-link-icon fa fa-cog"></i>
                Configuraciones
              </Link>
            </li>
          </ul>
        </div>
        <div className="app-header-right">
          <div className="header-btn-lg pr-0">
            <div className="widget-content p-0">
              <div className="widget-content-wrapper">
                <div className="widget-content-left">
                  <div className="btn-group">
                    <Link
                      to={"/"}
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="p-0 btn"
                    >
                      <img
                        width="42"
                        className="rounded-circle"
                        src="assets/images/avatars/1.png"
                        alt=""
                      />
                      <i className="fa fa-angle-down ml-2 opacity-8"></i>
                    </Link>
                  </div>
                </div>
                <div className="widget-content-left  ml-3 header-user-info">
                  <div className="widget-heading">Gregory Sánchez</div>
                  <div className="widget-subheading">Software Developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return <Fragment>{isAuthenticated ? _navbar : ""}</Fragment>;
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
