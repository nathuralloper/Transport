import React, { Fragment, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../action/auth";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    login({ email, password });
  };

  //Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <div className="app-container app-theme-white body-tabs-shadow">
        <div className="app-container">
          <div
            style={{ margin: "auto" }}
            className="h-100 d-flex bg-white justify-content-center align-items-center col-md-12 col-lg-8"
          >
            <div className="mx-auto app-login-box col-sm-12 col-md-10 col-lg-9">
              <div className="app-logo"></div>
              <h4 className="mb-0">
                <span>Inicia sesión con tu cuenta.</span>
              </h4>

              <div className="divider row"></div>
              <div>
                <form onSubmit={e => onSubmit(e)}>
                  <div className="form-row">
                    <div className="col-md-6">
                      <div className="position-relative form-group">
                        <label>Correo Electronico</label>
                        <input
                          name="email"
                          id="exampleEmail"
                          placeholder="Introduzca su correo electronico..."
                          type="email"
                          onChange={e => onChange(e)}
                          value={email}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="position-relative form-group">
                        <label className="">Contraseña</label>
                        <input
                          name="password"
                          id="examplePassword"
                          placeholder="Introduzca su contraseña..."
                          type="password"
                          onChange={e => onChange(e)}
                          value={password}
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="position-relative form-check">
                    <input
                      name="check"
                      id="exampleCheck"
                      type="checkbox"
                      className="form-check-input"
                    />
                    <label className="form-check-label">Recordarme</label>
                  </div>
                  <div className="divider row"></div>
                  <div className="d-flex align-items-center">
                    <div className="ml-auto">
                      <Link to={"/"} className="btn-lg btn btn-link">
                        Recuperar Contraseña
                      </Link>
                      <button className="btn btn-primary btn-lg" type="submit">
                        Iniciar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
