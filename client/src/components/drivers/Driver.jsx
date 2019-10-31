import React, { Fragment } from "react";
import { deleteDriver } from "../../action/drivers";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Driver = ({ item, deleteDriver }) => {
  return (
    <Fragment>
      <tr>
        <td>
          {item.fistname} {item.lastname}
        </td>
        <td>
          <span
            className={
              item.active
                ? "mb-2 mr-2 badge badge-primary"
                : "mb-2 mr-2 badge badge-secondary"
            }
          >
            {item.active ? "Activo" : "Inactivo"}
          </span>
        </td>
        <td>{item.identification_number}</td>
        <td>
          <td class="text-right">
            <button
              type="button"
              id="PopoverCustomT-1"
              class="btn btn-primary btn-sm"
            >
              Editar
            </button>
            <span> </span>
            <button
              type="button"
              id="PopoverCustomT-1"
              class="btn btn-danger btn-sm"
              onClick={() => deleteDriver(item._id)}
            >
              Eliminar
            </button>
          </td>
        </td>
      </tr>
    </Fragment>
  );
};

Driver.propTypes = {
  deleteRoute: PropTypes.object.isRequired
};
export default connect(
  null,
  { deleteDriver }
)(Driver);
