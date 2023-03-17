import React, { Component } from "react";
import { Formik, Form } from "formik";
import Email from "./RegisterEmail";
import { RegisterSchema } from "../Formik and yup/schema";
import Password from "./RegisterPass";
import Name from "./RegisterName";
import * as userServisec from "../../services/userServisec"

const Register = () => {
  const onSubmit = async (values , actions) => {
    await userServisec.register(values);
     actions.resetForm();
  };

  return (
    <div className="container mt-5">
      <h1 className="fw-bold">Register</h1>
      <Formik
        initialValues={{ email: "", password: "", name: "" }}
        validationSchema={RegisterSchema}
        onSubmit={onSubmit}
      >
        {(props) => (
          <Form>
            <Email
              label="Usrrname :"
              name="email"
              placeholder="Pleas Enter the your email"
            />

            <Password
              label="Password :"
              name="password"
              placeholder="please Enter the password"
            />
            <Name
              label="Name :"
              name="name"
              placeholder="please Enter the name"
            />
            <button
              style={{ marginLeft: "30px", borderRadius: "10px" }}
              className="bg-primary"
              type="submit"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
