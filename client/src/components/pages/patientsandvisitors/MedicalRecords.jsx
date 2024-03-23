import React, { useEffect, useState } from 'react';
import PatientCard from './PatientCard';
import Navbar from '../../Navbar';
import axios from 'axios'
import '../../../styles/medicalRecords.css';

const MedicalRecords = () => {
  const [patients, setPatients] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');

    axios.defaults.headers.common['Authentication'] = 'Bearer ' + token;

    axios.get('http://localhost:3001/get-patient-info')
      .then(res => {
        console.log(res.data.data.messages)
        setPatients(res.data.data.messages);
      })
      .catch(err => {
        setError('Error fetching from server', err);
      })
  }, []);

  return (      
    <div className="patients-info-container">
      <Navbar />
      <h2 className="patients-info-heading">Patients Information</h2>
      <div className="patients-container">
        {patients.map((patient, index) => (
          <PatientCard key={index} patients={[patient]} />
        ))}
      </div>
      {error && <p className="error-msg">{error}</p>}
    </div>
  );
};

export default MedicalRecords;
