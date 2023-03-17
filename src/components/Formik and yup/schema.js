import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  username: yup.string().required("Required"),

  age: yup.number().positive().integer().required("Required"),

  password: yup
    .string()
    .min(8)
    .matches(passwordRules, { messege: "please create a stronger password" })
    .required("Required"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "passwords must match"),
});

export const AdvancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "username must be at least 3 characters long")
    .required("Required"),

  jobtype: yup
    .string()
    .oneOf(["designer", " developer", "manager", "other"], "chose one of them")
    .required("Required"),

  acceptedTos: yup.boolean().oneOf([true], "pleas accept the terms of service"),
});

export const RegisterSchema = yup.object().shape({
  email: yup.string().email().required("Required"),

  password: yup
    .string()
    .min(5, "password must be at least 5 characters long")
    .required("Required"),

  name: yup.string().min(3, "name must be at least 3 characters long"),
});

export const schema_MovieForm = yup.object().shape({
  _id: yup.string(),
  title: yup.string().required("Required"),
  genreId: yup
    .string()
    // .oneOf(["Action", "Comedy", "Thriller"], "chose one of them")
    .required("Required"),
    numberInStock: yup.number().positive().min(0).max(100).required("Required"),
    dailyRentalRate: yup.number().positive().min(0).max(10).required("Required"),
});
