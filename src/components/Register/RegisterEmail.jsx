import React, { Component } from "react";
import { useField } from "formik";

const Email = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="container">
      <label className="fs-5 m-1" >{label}</label>
      <br />
      <input
        {...field}
        {...props}
        type="text"
        className={`form-control ${
          meta.error && meta.touched ? "is-invalid" : ""
        }`}
      />
      {meta.error && meta.touched && (
        <div className="error p-3">
          <span style={{color:"darkred"}} className=" fw-bold m-3">{meta.error}</span>
        </div>
      )}
      <br />
    </div>
  );
};

export default Email;
