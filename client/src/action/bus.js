import axios from "axios";
import {
  BUS_LIST,
  ERROR_BUS_LIST,
  BUS_CREATE,
  ERROR_BUS_CREATE,
  BUS_DELETE,
  ERROR_DELETE_BUS
} from "./types";
import Swal from "sweetalert2";

export const add = (formData, history) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  console.log(formData);
  const body = JSON.stringify(formData);
  console.log(body);
  try {
    const res = await axios.post("/api/bus", body, config);
    dispatch({ type: BUS_CREATE, payload: res.data });

    Swal.fire(
      "Guardado",
      "El autobus se ha guardado satisfactoriamente",
      "success"
    );

    history.push("/bus");
  } catch (err) {
    console.log(err);
    const errors = err.response.data.errors;
    if (errors) {
      dispatch({ type: ERROR_BUS_CREATE });
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
    const res = await axios.get("/api/bus", config);
    console.log(res);
    dispatch({ type: BUS_LIST, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const deleteBus = Id => dispatch => {
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
        const res = axios.delete(`/api/bus/${Id}`, config);
        dispatch({ type: BUS_DELETE, payload: Id });
      }
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      dispatch({ type: ERROR_DELETE_BUS });
    }
  }
};
