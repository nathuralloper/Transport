import validator from "validator";
import isEmpty from "./isEmpty";

const validateLoginInput = data => {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!validator.isEmail(data.email)) {
    errors.email = "El correo electronico es invalido";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "El correo electronico es requerido";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "La contraseña es requerida";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default validateLoginInput;
