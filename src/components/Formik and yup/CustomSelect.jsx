import React, { Component } from "react";
import { useField } from "formik";

const CustomSelect = ({label , ...props}) => {
  const [field, meta] = useField(props);

  console.log("field", field);
  console.log("meta", meta);

  return (
    <div style={{ margin: "auto" }} className="container">
      <select
        {...field}
        {...props}
        className={`form-control ${
          meta.touched && meta.error ? "is-invalid" : ""
        }`}
      />
      {meta.error && meta.touched && <p className="text-danger m-1 ">{meta.error}</p>}
      <br />
    </div>
  );
};
export default CustomSelect;
