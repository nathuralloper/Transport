import React, { Fragment, useState, useEffect, useRef } from "react";
import { getByIdRoute } from "../../action/routes";
import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";
import Select from "react-select";

const RouteEdit = ({
  route: { name, active, origin_province, destination_province },
  getByIdRoute,
  match,
  history
}) => {
  const actives = [
    { label: "Activo", value: true },
    { label: "Inactivo", value: false }
  ];
  const techCompanies = [
    { label: "Santo Domingo", value: "5dace3b899d3ab5d54bedd82" },
    { label: "Santiago", value: "5dace3b899d3ab5d54bedd828" }
  ];

  const [formData, setFormData] = useState({
    name: "",
    active: false,
    origin_province: "",
    destination_province: ""
  });

  //get id when editing
  const { id } = match.params;
  useEffect(() => {
    getByIdRoute(id);
    setFormData({
      name: name
    });
  }, [getByIdRoute]);

  //access the state
  const item = useSelector(state => state.routes.item);

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onClick = e => {
    e.preventDefault();
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
                  Editar ruta
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
                            name="destination_province"
                            onChange={e =>
                              onChange({
                                target: {
                                  name: "destination_province",
                                  value: e.value
                                }
                              })
                            }
                            placeholder="Seleccionar..."
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
                            options={techCompanies}
                            onChange={e =>
                              onChange({
                                target: {
                                  name: "origin_province",
                                  value: e.value
                                }
                              })
                            }
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
                            onChange={e =>
                              onChange({
                                target: {
                                  name: "destination_province",
                                  value: e.value
                                }
                              })
                            }
                            placeholder="Seleccionar..."
                            options={techCompanies}
                          ></Select>
                        </div>
                      </div>
                    </div>
                    {/* onChange={(val)=> {onChangeFunc({target: { name:'revision_id', value: val.value }})}} */}
                    <button
                      type="button"
                      className="mt-2 btn btn-primary"
                      onClick={e => onClick(e)}
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

RouteEdit.propTypes = {
  getByIdRoute: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  route: state.routes.item
});

export default connect(
  mapStateToProps,
  { getByIdRoute }
)(RouteEdit);
