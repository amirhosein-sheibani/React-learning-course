import { useField } from "formik";
import React, { Component } from "react";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  console.log("field", field);
  console.log("meta", meta);

  return (
    <div style={{ margin: "auto" }} className="container">
      <label className="m-2">{label}</label>
      <br />
      <input
        {...field}
        {...props}
        className={`form-control ${
          meta.touched && meta.error ? "is-invalid" : ""
        }`}
      />
      {meta.error && meta.touched && <div className="text-danger m-1 ">{meta.error}</div>}
      <br />
    </div>
  );
};

export default CustomInput;
