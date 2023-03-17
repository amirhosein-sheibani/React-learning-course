import React, { Component } from "react";
import { Form, Formik } from "formik";
import CustomInput from "./CustomInputs";
import { AdvancedSchema } from "./schema";
import CustomSelect from "./CustomSelect";

const AdvancedFormik = () => {
  return (
    <Formik
      initialValues={{ username: "", jobtype: "", acceptedTos: true }}
      validationSchema={AdvancedSchema}
    >
      {(props) => (
        <Form>
          <CustomInput
            label="Username :"
            name="username"
            type="text"
            placeholder="Enter your username"
          />
          <CustomSelect label="Job Type :" name="jobtype" >
            <option value="designer">Developer</option>
            <option value="developer">Designer</option>
            <option value="manager">Manager</option>
            <option value="other">Other</option>
          </CustomSelect>
          <button
            style={{ marginLeft: "130px", borderRadius: "10px" }}
            className="bg-primary"
            type="submit"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AdvancedFormik;
