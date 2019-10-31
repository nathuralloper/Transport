import React, { Fragment, useState } from "react";
import Select from "react-select";
import { addRoute } from "../../action/routes";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RouteCreate = ({ addRoute, history }) => {
  const [formData, setFormData] = useState({
    name: "",
    active: false,
    origin_province: "",
    destination_province: ""
  });

  const { name, active, origin_province, destination_province } = formData;
  const actives = [
    { label: "Activo", value: true },
    { label: "Inactivo", value: false }
  ];
  const techCompanies = [
    { label: "Apple", value: "5dace3b899d3ab5d54bedd82" },
    { label: "Facebook", value: "5dace3b899d3ab5d54bedd82" },
    { label: "Netflix", value: "5dace3b899d3ab5d54bedd82" },
    { label: "Tesla", value: "5dace3b899d3ab5d54bedd82" },
    { label: "Amazon", value: "5dace3b899d3ab5d54bedd82" },
    { label: "Alphabet", value: "5dace3b899d3ab5d54bedd82" }
  ];
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    addRoute(formData, history);
  };

  return (
    <Fragment>
      <div class="app-main__outer">
        <div class="app-main__inner">
          <div class="app-page-title">
            <div class="page-title-wrapper">
              <div class="page-title-heading">
                <div class="page-title-icon">
                  <i class="pe-7s-car icon-gradient bg-mean-fruit"></i>
                </div>
                <div>
                  Nueva ruta
                  <div class="page-title-subheading"></div>
                </div>
              </div>
            </div>
            <br />
          </div>
          <div className="tab-content">
            <div
              className="tab-pane tabs-animation fade show active"
              id="tab-content-0"
              role="tabpanel"
            >
              <div className="main-card mb-3 card">
                <div className="card-body">
                  <form className="">
                    <div className="form-row">
                      <div className="col-md-12">
                        <div className="position-relative form-group">
                          <label for="exampleEmail11" className="">
                            Nombre
                          </label>
                          <input
                            name="name"
                            id="exampleEmail11"
                            placeholder="Ej. Santo Domingo - Santiago"
                            type="text"
                            onChange={e => onChange(e)}
                            value={name}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="position-relative form-group">
                          <label for="exampleEmail11" className="">
                            Estado
                          </label>
                          <Select
                            name="active"
                            placeholder="Seleccionar..."
                            onChange={e =>
                              onChange({
                                target: {
                                  name: "active",
                                  value: e.value
                                }
                              })
                            }
                            options={actives}
                          ></Select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="position-relative form-group">
                          <label for="exampleEmail11" className="">
                            Provincia (Origen)
                          </label>
                          <Select
                            name="origin_province"
                            placeholder="Seleccionar..."
                            onChange={e =>
                              onChange({
                                target: {
                                  name: "origin_province",
                                  value: e.value
                                }
                              })
                            }
                            options={techCompanies}
                          ></Select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="position-relative form-group">
                          <label for="exampleEmail11" className="">
                            Provincia (Destino)
                          </label>
                          <Select
                            name="destination_province"
                            placeholder="Seleccionar..."
                            onChange={e =>
                              onChange({
                                target: {
                                  name: "destination_province",
                                  value: e.value
                                }
                              })
                            }
                            options={techCompanies}
                          ></Select>
                        </div>
                      </div>
                    </div>
                    {/* onChange={(val)=> {onChangeFunc({target: { name:'revision_id', value: val.value }})}} */}
                    <Link
                      type="button"
                      to={"/routes"}
                      className="mt-2 btn btn-danger"
                    >
                      Cerrar
                    </Link>
                    <span> </span>
                    <button
                      type="button"
                      onClick={() => addRoute(formData, history)}
                      className="mt-2 btn btn-primary"
                    >
                      Guardar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

RouteCreate.propTypes = {
  addRoute: PropTypes.object.isRequired
};

export default connect(
  null,
  { addRoute }
)(RouteCreate);
