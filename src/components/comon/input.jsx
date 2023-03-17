import React, { Component } from "react";

const input = ({ name, value, error , lable, onChange }) => {
  return (
    <div className="form-group m-3">
      <label className="m-1" htmlFor={name}>
        {lable}
      </label>
      <input
        value={value}
        name={name}
        onChange={onChange}
        id={name}
        type="text"
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default input;
