import React, { Fragment } from "react";
import { deleteRoute } from "../../action/routes";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Route = ({ route, deleteRoute }) => {
  return (
    <Fragment>
      <tr>
        <td>{route.name}</td>
        <td>
          <span
            className={
              route.active
                ? "mb-2 mr-2 badge badge-primary"
                : "mb-2 mr-2 badge badge-secondary"
            }
          >
            {route.active ? "Activo" : "Inactivo"}
          </span>
        </td>
        <td>
          {route.origin_province.name} - {route.destination_province.name}
        </td>
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
              onClick={() => deleteRoute(route._id)}
            >
              Eliminar
            </button>
          </td>
        </td>
      </tr>
    </Fragment>
  );
};

Route.propTypes = {
  deleteRoute: PropTypes.object.isRequired
};
export default connect(
  null,
  { deleteRoute }
)(Route);
