import axios from "axios";
import {
  STATION_LIST,
  ERROR_STATION_LIST,
  STATION_CREATE,
  ERROR_STATION_CREATE,
  STATION_DELETE,
  ERROR_DELETE_STATION
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
    const res = await axios.post("/api/stations", body, config);
    dispatch({ type: STATION_CREATE, payload: res.data });

    Swal.fire(
      "Guardado",
      "La estacion se ha guardado satisfactoriamente",
      "success"
    );

    history.push("/stations");
  } catch (err) {
    console.log(err);
    const errors = err.response.data.errors;
    if (errors) {
      dispatch({ type: ERROR_STATION_CREATE });
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
    const res = await axios.get("/api/stations", config);
    console.log(res);
    dispatch({ type: STATION_LIST, payload: res.data });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      dispatch({ type: ERROR_STATION_LIST });
    }
  }
};

export const deleteStation = Id => dispatch => {
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
          "La estación se elimino correctamente.",
          "success"
        );
        const res = axios.delete(`/api/stations/${Id}`, config);
        dispatch({ type: STATION_DELETE, payload: Id });
      }
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      dispatch({ type: ERROR_DELETE_STATION });
    }
  }
};
