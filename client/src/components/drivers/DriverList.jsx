import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect, useSelector } from "react-redux";
import { getAll } from "../../action/drivers";
import Driver from "./Driver";
import { Link } from "react-router-dom";

const DriverList = ({ getAll }) => {
  useEffect(() => {
    getAll();
  }, [getAll]);

  //acceder al state
  const items = useSelector(state => state.driver.items);
  console.log(items);
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
                  Listado de choferes
                  <div class="page-title-subheading"></div>
                </div>
              </div>
              <div class="page-title-actions">
                <div class="d-inline-block dropdown">
                  <Link to={"/driver/new"} class="mt-2 btn-lg btn-primary">
                    + chofer
                  </Link>
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
            ></div>
          </div>
          <div class="col-lg-12">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title"></h5>
                <table class="mb-0 table">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Estado</th>
                      <th>Identificación</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map(item => (
                      <Driver key={item._id} item={item} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

DriverList.propTypes = {
  getAll: PropTypes.object.isRequired
};

export default connect(
  null,
  { getAll }
)(DriverList);
