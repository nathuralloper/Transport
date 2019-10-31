import React, { Fragment } from "react";
import { deleteBus } from "../../action/bus";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Bus = ({ item, deleteBus }) => {
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
        <td>
          {item.brand}/{item.model}
        </td>
        <td>{item.capacity} Personas</td>
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
              onClick={() => deleteBus(item._id)}
            >
              Eliminar
            </button>
          </td>
        </td>
      </tr>
    </Fragment>
  );
};

Bus.propTypes = {
  deleteBus: PropTypes.object.isRequired
};
export default connect(
  null,
  { deleteBus }
)(Bus);
