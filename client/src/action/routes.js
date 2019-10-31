import axios from "axios";
import {
  ROUTES_CREATE,
  ERROR_CREATING_ROUTE,
  ROUTES_LIST,
  ERROR_LIST_ROUTES,
  GETTING_ROUTES_BY_ID,
  ERROR_GETTING_ROUTES_BY_ID,
  ROUTES_DELETE,
  ERROR_DELETE_ROUTES
} from "./types";
import Swal from "sweetalert2";

export const addRoute = (formData, history) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify(formData);

  try {
    const res = await axios.post("/api/routes", body, config);
    dispatch({ type: ROUTES_CREATE, payload: res.data });

    Swal.fire(
      "Guardado",
      "La ruta se ha guardado satisfactoriamente",
      "success"
    );

    history.push("/routes");
  } catch (err) {
    console.log(err);
    const errors = err.response.data.errors;
    if (errors) {
      dispatch({ type: ERROR_CREATING_ROUTE });
    }
  }
};

export const getAllRoute = () => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.get("/api/routes", config);
    console.log(res);
    dispatch({ type: ROUTES_LIST, payload: res.data });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      dispatch({ type: ERROR_LIST_ROUTES });
    }
  }
};

export const getByIdRoute = Id => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.get(`/api/routes/${Id}`, config);
    console.log(res);
    dispatch({ type: GETTING_ROUTES_BY_ID, payload: res.data });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      dispatch({ type: ERROR_GETTING_ROUTES_BY_ID });
    }
  }
};

export const editRoute = (formData, history) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify(formData);

  try {
    const res = await axios.put("/api/routes", body, config);
    dispatch({ type: ROUTES_CREATE, payload: res.data });

    Swal.fire(
      "Guardado",
      "La ruta se ha guardado satisfactoriamente",
      "success"
    );

    history.push("/route");
  } catch (err) {
    console.log(err);
    const errors = err.response.data.errors;
    if (errors) {
      dispatch({ type: ERROR_CREATING_ROUTE });
    }
  }
};

export const deleteRoute = Id => dispatch => {
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
        Swal.fire("Eliminado!", "La ruta se elimino correctamente.", "success");
        const res = axios.delete(`/api/routes/${Id}`, config);
        dispatch({ type: ROUTES_DELETE, payload: Id });
      }
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      dispatch({ type: ERROR_DELETE_ROUTES });
    }
  }
};
