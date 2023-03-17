import React, { Component } from "react";
import { useFormik } from "formik";
import { basicSchema } from "./schema";

const Loginformformik = () => {

  const onSubmit = async (values , actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      username: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit} className="m-4">
      <div className="mb-3 container">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`form-control ${
            errors.username && touched.username ? "is-invalid" : ""
          }`}
          id="username"
          placeholder="Enter your name"
          autoFocus
          type="text"
        />
        {errors.username && touched.username && (
          <p className="text-danger m-1">{errors.username}</p>
        )}
      </div>
      <div className="mb-3 container">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`form-control ${
            errors.age && touched.age ? "is-invalid" : ""
          }`}
          id="age"
          type="number"
          placeholder="Enter your age"
        />
        {errors.age && touched.age && (
          <p className="text-danger m-1">{errors.age}</p>
        )}
      </div>
      <div className="mb-3 container">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
          className={`form-control ${
            errors.password && touched.password ? "is-invalid" : ""
          }`}
          id="password"
          placeholder="Enter password"
        />
        {errors.password && touched.password && (
          <p className="text-danger m-1">{errors.password}</p>
        )}
      </div>
      <div className="mb-3 container">
        <label htmlFor="confirmPassword" className="form-label">
          Confrim Password
        </label>
        <input
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`form-control ${
            errors.confirmPassword && touched.confirmPassword
              ? "is-invalid"
              : ""
          }`}
          id="confirmPassword"
          placeholder="repeat pasword"
          type="password"
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <p className="text-danger   -1">{errors.confirmPassword}</p>
        )}
      </div>
      <div className="container">
        <button disabled={isSubmitting} type="submit">
          Login
        </button>
      </div>
    </form>
  );
};

export default Loginformformik;
