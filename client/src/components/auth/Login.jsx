import React, { useState } from 'react'
import { Button, TextField } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import HeroBg from '../../assets/images/login-bg.jpg';
import '../../styles/login.css'

function Login() {
  const [formData, setFormData] = useState({
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
    try {
      await axios.post('http://localhost:3001/login', formData).then(res => {

        localStorage.setItem('jwtToken', res.data.token);

        const decodedToken = jwtDecode(res.data.token);    // decode the token
        const userRole = decodedToken.role;   // extract the role

        console.log('Login successful')
        setError('');

        // check the role and navigate accordingly
        switch (userRole) {
          case 'admin':
            navigate('/patients-visitors');
            break;
          case 'user':
            navigate('/home');
            break;
          default:
            console.log('Unknown role');
            setError('Invalid role');
        }
      })          
    } catch (err) {
        console.error('Login failed', err.response ? err.response.data.message : err);
        setError(err.response ? err.response.data.message : 'An error occurred');
    }
  };  

  return (
    <div className="login-container">
      <div className="image-container">
        <img src={HeroBg} className="login-image" alt='login-img'/>
      </div>
      <div className="form-container">
        <h2>Signin to your Account</h2>
        <form onSubmit={handleSubmit}>
          <TextField 
            label="Email" 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            variant="standard" 
            sx={{ input: { 
              color: 'white',
              fontFamily: 'PT Serif, serif' 
            }}}
            InputLabelProps={{style: {color: '#2196f3'}}}
            style={{ width: '100%', paddingBottom: '25px' }}
            required
          />
          <TextField 
            label="Password" 
            type="password" 
            name="password" 
            value={formData.password}
            onChange={handleChange}
            variant="standard" 
            sx={{ input: { 
              color: 'white',
              fontFamily: 'PT Serif, serif' 
            }}}
            InputLabelProps={{style: {color: '#2196f3'}}} 
            style={{ width: '100%', paddingBottom: '25px' }}
            required
          />
          <p className='signup-msg'>
            Do not have an Account?  
            <NavLink to="/" className="nav-link">Sign Up</NavLink>
          </p>
          <Button className='button' color='inherit' type="submit">
            Login
          </Button>
          {error && <p className="error-msg" style={{ color: 'red', fontFamily: 'PT Serif, serif' }}>{error}</p>}
        </form>
      </div>
    </div>
  )
}

export default Login
