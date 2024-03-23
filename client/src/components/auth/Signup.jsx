import React, { useState } from 'react'
import { Button, TextField } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import HeroBg from '../../assets/images/signup-bg.jpg';
import '../../styles/signup.css'

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setError('');  // Reset error on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      await axios.post('http://localhost:3001/register', formData);
      console.log('Registration successful');
      setError('');  // Reset error on success
      navigate('/login');  // Redirect to login page
    } catch (err) {
      console.error('Registration failed', err.response.data);
      setError(err.response.data.message);  // Set error message
    }
};

  return (
    <div className="login-container">
      <div className="form-container">
        <h2>Create your Account</h2>
        <form onSubmit={handleSubmit}>
          <TextField 
            label="Name" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="standard" 
            sx={{
              input: { 
                color: 'white',
                fontFamily: 'PT Serif, serif' 
              },
              '& .MuiFormHelperText-root': {
                fontFamily: 'PT Serif, serif',
                marginTop: '5px'
              },
            }} 
            InputLabelProps={{style: {color: '#2196f3'}}}
            style={{ width: '100%', paddingBottom: '15px' }}
            required
          />
          <TextField 
            label="Email" 
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            variant="standard" 
            sx={{ input: { 
              color: 'white',
              fontFamily: 'PT Serif, serif' 
            }}}
            InputLabelProps={{style: {color: '#2196f3'}}}
            style={{ width: '100%', paddingBottom: '15px' }}
            required
          />
          <TextField 
            label="Password" 
            name="password"
            type='password'
            value={formData.password}
            onChange={handleChange}
            variant="standard" 
            sx={{ input: { 
              color: 'white',
              fontFamily: 'PT Serif, serif' 
            }}} 
            InputLabelProps={{style: {color: '#2196f3'}}}
            style={{ width: '100%', paddingBottom: '15px' }}
            required
          />
          <p className='signup-msg'>
            Already have an Account?  
            <NavLink to="/login" className="nav-link">Login here</NavLink>
          </p>
          <Button className="button" color="inherit" type="submit">
            Create Account
          </Button>
          {error && <p className="error-msg">{error}</p>}
        </form>
      </div>
      <div className="image-container">
        <img src={HeroBg} className="login-image" alt='login-img'/>
      </div>
    </div>
  )
}

export default Signup
