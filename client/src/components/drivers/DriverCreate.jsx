import React, { Fragment, useState } from "react";
import Select from "react-select";
import { add } from "../../action/drivers";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DriverCreate = ({ add, history }) => {
  const [formData, setFormData] = useState({
    fistname: "",
    lastname: "",
    address: "",
    identification_number: "",
    active: false
  });

  const {
    fistname,
    lastname,
    address,
    identification_number,
    active
  } = formData;
  const actives = [
    { label: "Activo", value: true },
    { label: "Inactivo", value: false }
  ];

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
                  Nuevo chofer
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
                      <div className="col-md-4">
                        <div className="position-relative form-group">
                          <label for="exampleEmail11" className="">
                            Nombres
                          </label>
                          <input
                            name="fistname"
                            id="exampleEmail11"
                            placeholder="Ej. Gabriel"
                            type="text"
                            onChange={e => onChange(e)}
                            value={fistname}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="position-relative form-group">
                          <label for="exampleEmail11" className="">
                            Apellidos
                          </label>
                          <input
                            name="lastname"
                            id="exampleEmail11"
                            placeholder="Ej. Santos Cruz"
                            type="text"
                            onChange={e => onChange(e)}
                            value={lastname}
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
                      <div className="col-md-6">
                        <div className="position-relative form-group">
                          <label for="exampleEmail11" className="">
                            Identificación
                          </label>
                          <input
                            name="identification_number"
                            id="exampleEmail11"
                            placeholder="Ej. 001-2098756-9"
                            type="text"
                            onChange={e => onChange(e)}
                            value={identification_number}
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="position-relative form-group">
                          <label for="exampleEmail11" className="">
                            Dirección
                          </label>
                          <input
                            name="address"
                            id="exampleEmail11"
                            placeholder="Ej. Av. 27 de Febrero #17, Santo Domingo Republica Dominicana"
                            type="text"
                            onChange={e => onChange(e)}
                            value={address}
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    {/* onChange={(val)=> {onChangeFunc({target: { name:'revision_id', value: val.value }})}} */}
                    <Link
                      type="button"
                      to={"/drivers"}
                      className="mt-2 btn btn-danger"
                    >
                      Cerrar
                    </Link>
                    <span> </span>
                    <button
                      type="button"
                      onClick={() => add(formData, history)}
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

DriverCreate.propTypes = {
  add: PropTypes.object.isRequired
};

export default connect(
  null,
  { add }
)(DriverCreate);
