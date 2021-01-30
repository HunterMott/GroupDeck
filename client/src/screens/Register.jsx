import React from "react";
import Layout from "../layouts/Layout";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState } from "react";

const Register = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister(formData);
        }}
      >
        <TextField
          name="username"
          id="username"
          label="Username"
          variant="outlined"
          value={username}
          onChange={handleChange}
        />
        <TextField
          name="email"
          id="email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleChange}
        />
        <TextField
          name="password"
          id="password"
          type="password"
          label="Password"
          variant="outlined"
          value={password}
          onChange={handleChange}
        />
        <Button variant="contained">Login</Button>
        <button>submit</button>
      </form>
    </div>
  );
};

export default Register;
