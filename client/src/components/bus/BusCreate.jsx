import React, { Fragment, useState } from "react";
import Select from "react-select";
import { add } from "../../action/bus";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BusCreate = ({ add, history }) => {
  const [formData, setFormData] = useState({
    name: "",
    active: false,
    color: "",
    brand: "",
    model: "",
    serial: "",
    capacity: 0
  });

  const { name, color, brand, model, serial, capacity, active } = formData;
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
                  Nuevo autobus
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
                            Color
                          </label>
                          <input
                            name="color"
                            id="exampleEmail11"
                            placeholder="Ej. Azul"
                            type="color"
                            onChange={e => onChange(e)}
                            value={color}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="position-relative form-group">
                          <label for="exampleEmail11" className="">
                            Marca
                          </label>
                          <input
                            name="brand"
                            id="exampleEmail11"
                            placeholder="Ej. Toyota"
                            type="text"
                            onChange={e => onChange(e)}
                            value={brand}
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
                            Modelo
                          </label>
                          <input
                            name="model"
                            id="exampleEmail11"
                            placeholder="Ej. Corolla"
                            type="text"
                            onChange={e => onChange(e)}
                            value={model}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="position-relative form-group">
                          <label for="exampleEmail11" className="">
                            Serial
                          </label>
                          <input
                            name="serial"
                            id="exampleEmail11"
                            placeholder="Ej. N093AS"
                            type="text"
                            onChange={e => onChange(e)}
                            value={serial}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="position-relative form-group">
                          <label for="exampleEmail11" className="">
                            Capacidad
                          </label>
                          <input
                            name="capacity"
                            id="exampleEmail11"
                            placeholder="Ej. 14"
                            type="number"
                            onChange={e => onChange(e)}
                            value={capacity}
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    {/* onChange={(val)=> {onChangeFunc({target: { name:'revision_id', value: val.value }})}} */}
                    <Link
                      type="button"
                      to={"/bus"}
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

BusCreate.propTypes = {
  add: PropTypes.object.isRequired
};

export default connect(
  null,
  { add }
)(BusCreate);
