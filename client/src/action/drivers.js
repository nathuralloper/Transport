import axios from "axios";
import {
  DRIVER_LIST,
  ERROR_DRIVER_LIST,
  DRIVER_CREATE,
  ERROR_DRIVER_CREATE,
  DRIVER_DELETE,
  ERROR_DELETE_DRIVER
} from "./types";
import Swal from "sweetalert2";

export const add = (formData, history) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify(formData);

  try {
    const res = await axios.post("/api/drivers", body, config);
    dispatch({ type: DRIVER_CREATE, payload: res.data });

    Swal.fire(
      "Guardado",
      "El chofer se ha guardado satisfactoriamente",
      "success"
    );

    history.push("/drivers");
  } catch (err) {
    console.log(err);
    const errors = err.response.data.errors;
    if (errors) {
      dispatch({ type: ERROR_DRIVER_CREATE });
    }
  }
};

export const getAll = () => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.get("/api/drivers", config);
    console.log(res);
    dispatch({ type: DRIVER_LIST, payload: res.data });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      dispatch({ type: ERROR_DRIVER_LIST });
    }
  }
};

export const deleteDriver = Id => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    Swal.fire({
      title: "Estas seguro?",
      text: "Que deseas eliminarlo!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!",
      cancelButtonText: "Cancelar"
    }).then(result => {
      if (result.value) {
        Swal.fire(
          "Eliminado!",
          "El chofer se elimino correctamente.",
          "success"
        );
        const res = axios.delete(`/api/drivers/${Id}`, config);
        dispatch({ type: DRIVER_DELETE, payload: Id });
      }
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      dispatch({ type: ERROR_DELETE_DRIVER });
    }
  }
};
