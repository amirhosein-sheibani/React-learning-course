import React, { Component } from "react";
import Input from "./input";
import * as loginService from "../../services/loginService"

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };


  validate = () => {

    const errors = {};
    const { account } = this.state;
    if (account.username.trim() === "")
      errors.username = "Username is required";
    if (account.password.trim() === "")
      errors.password = "password is required";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const {account} = this.state;
    const {account : jwt} =await loginService.login(account.username , account.password);
    console.log(jwt);
    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;

    //call the server
  };

  validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") return "Username is required";
      //...
    }
    if (name === "password") {
      if (value.trim() === "") return "Password is required";
      //...
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div className="container mt-5">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <Input
            value={account.username}
            name="username"
            lable="Username"
            onChange={this.handleChange}
            error={errors.username}
          ></Input>
          <Input
            value={account.password}
            name="password"
            lable="Password"
            onChange={this.handleChange}
            error={errors.password}
          ></Input>
          <button onSubmit={this.handleSubmite} className="btn btn-primary m-3">Login</button>
        </form>
        <BasicForm/>
      </div>
    );
  }
}

export default LoginForm;
