import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import '../styles/Form.css'

const Login = (props) => {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className='formdiv'>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleLogin(formData)
        }}>
        <TextField
            name='username'
            id="username"
            label="Username" variant="outlined"
            value={username}
            onChange={handleChange}/>
        <TextField
            name='password'
            id="password"
            type='password'
            label="Password" variant="outlined"
            value={password}
            onChange={handleChange}/>
        <Button className='formbutton'
          variant="contained"
          type='submit'
          >Login</Button>
        </form>
    </div>
  );
};

export default Login;