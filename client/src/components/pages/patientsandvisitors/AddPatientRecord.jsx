import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import axios from 'axios';
import '../../../styles/addPatientRecord.css'
import Navbar from '../../Navbar';

function AddPatientRecord() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    treatmentPlan: '',
    medicalHistory: '',
    conditions: '',
    medications: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      const token = localStorage.getItem('jwtToken');
      axios.defaults.headers.common['Authentication'] = 'Bearer ' + token;  // Set the Authorization header

      axios.post('http://localhost:3001/add-patient-info', formData);

      console.log('Patient Info added successfully');

      setError('');  // Reset error on success
      navigate('/patients-visitors');  // Redirect to patient-visitor page
    } catch (err) {
      console.error('Patient Info added failed', err.response.data);
      setError(err.response.data.message);  // Set error message
    }
  };
  
  return (
    <div className="add-record-container">
      <Navbar/>
      <div className="patient-form-container">
        <h2 className="add-patient-header">Add New Patient Record</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-row">
            <TextField 
              label="Name:" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="standard" 
              sx={{
                input: { 
                  color: '#2196f3',
                  fontFamily: 'PT Serif, serif' 
                }
              }} 
              InputLabelProps={{style: {color: '#043C81'}}}
              style={{ width: 'calc(50% - 5px)', paddingBottom: '10px', marginRight: '10px' }}
              required
            />
            <TextField 
              label="Age:" 
              name="age"
              type='number'
              value={formData.age}
              onChange={handleChange}
              variant="standard" 
              sx={{ input: { 
                color: '#2196f3',
                fontFamily: 'PT Serif, serif' 
              }}} 
              InputLabelProps={{style: {color: '#043C81'}}}
              style={{ width: 'calc(50% - 5px)', paddingBottom: '10px', marginLeft: '10px' }}
              required
            />
          </div>
          <div className="form-row">
            <FormControl component="fieldset" style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
              <div style={{ display: 'inline-flex',  marginRight: '20px' }}>
                <FormLabel component="legend" sx={{ color: '#043C81', fontFamily: 'PT Serif, serif', marginTop: '7px', marginBottom: '5px', marginRight: '25px' }}>Gender:</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  style={{ display: 'flex', flexDirection: 'row' }}
                >
                  <div className='radio-label'>
                    <div style={{ display: 'inline-flex', marginRight: '20px' }}>
                    <FormControlLabel 
                      value="male" 
                      control={<Radio />} 
                      label="Male" 
                    />
                    </div>
                    <div style={{ display: 'inline-flex' }}>
                    <FormControlLabel 
                      value="female" 
                      control={<Radio />} 
                      label="Female" 
                    />
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </FormControl>
            <TextField 
              label="Treatment Plan:" 
              name="treatmentPlan"
              type="text"
              value={formData.treatmentPlan}
              onChange={handleChange}
              variant="standard" 
              sx={{ input: { 
                color: '#2196f3',
                fontFamily: 'PT Serif, serif' 
              }}}
              InputLabelProps={{style: {color: '#043C81'}}}
              style={{ width: 'calc(50% - 5px)', paddingBottom: '10px', marginLeft: '10px' }}
              required
            />
          </div>
          <div className="form-row">
            <TextField 
              label="Medical History:" 
              name="medicalHistory"
              type="text"
              value={formData.medicalHistory}
              onChange={handleChange}
              variant="standard" 
              sx={{ input: { 
                color: '#2196f3',
                fontFamily: 'PT Serif, serif' 
              }}}
              InputLabelProps={{style: {color: '#043C81'}}}
              style={{ width: 'calc(50% - 5px)', paddingBottom: '10px', marginRight: '10px' }}
              required
            />
            <TextField 
              label="Conditions:" 
              name="conditions"
              type="text"
              value={formData.conditions}
              onChange={handleChange}
              variant="standard" 
              sx={{ input: { 
                color: '#2196f3',
                fontFamily: 'PT Serif, serif' 
              }}}
              InputLabelProps={{style: {color: '#043C81'}}}
              style={{ width: 'calc(50% - 5px)', paddingBottom: '10px', marginLeft: '10px' }}
              required
            />
          </div>
          <div className="form-row">
            <TextField 
              label="Medications:" 
              name="medications"
              type="text"
              value={formData.medications}
              onChange={handleChange}
              variant="standard" 
              sx={{ input: { 
                color: '#2196f3',
                fontFamily: 'PT Serif, serif' 
              }}}
              InputLabelProps={{style: {color: '#043C81'}}}
              style={{ width: 'calc(50% - 5px)', paddingBottom: '10px', marginRight: '10px' }}
              required
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button className="button" type="submit" color="inherit">Add Record</Button>
            {error && <p className="error-msg">{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPatientRecord
