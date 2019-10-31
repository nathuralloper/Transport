import React, { Fragment } from "react";
import { deleteStation } from "../../action/station";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Station = ({ item, deleteStation }) => {
  return (
    <Fragment>
      <tr>
        <td>{item.name}</td>
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
        <td>{item.contact}</td>
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
              onClick={() => deleteStation(item._id)}
              class="btn btn-danger btn-sm"
            >
              Eliminar
            </button>
          </td>
        </td>
      </tr>
    </Fragment>
  );
};

Station.propTypes = {
  deleteStation: PropTypes.object.isRequired
};
export default connect(
  null,
  { deleteStation }
)(Station);
