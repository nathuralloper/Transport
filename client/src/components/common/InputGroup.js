import React, { Fragment } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const InputGroup = ({
  name,
  placeholder,
  value,
  error,
  icon,
  type,
  onChange
}) => {
  const styleBorder = error ? { border: "1px solid #dc3545" } : {};
  return (
    <div>
      <input
        name={name}
        id="exampleEmail11"
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        value={value}
        className="form-control"
        style={styleBorder}
      />
      {error ? <div style={{ color: "#dc3545" }}>{error}</div> : ""}
    </div>
  );
};

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

InputGroup.defaultProps = {
  type: "text"
};

export default InputGroup;
