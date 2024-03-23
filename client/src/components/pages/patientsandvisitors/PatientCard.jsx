import React, { useState } from 'react'
import axios from 'axios';
import { Card, Typography } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import '../../../styles/patientCard.css';

const PatientCard = ({ patients }) => {
  const [id, setId] = useState('');
  const [response, setResponse] = useState('');

  if (id) {
    console.log('patient_id',id)
    axios.delete(`http://localhost:3001/delete-patient-info/${id}`)
      .then(() => {
        setResponse('Patient deleted successfully!');
        window.location.reload();
      })
      .catch(error => {
        console.error('Error updating on server:', error.response ? error.response.data.message : error.message);
      })
  } else {
    console.warn('Please provide both ID');
  }

  return (
    <div className="patient-card-container">
      {patients.map((patient, index) => (
        <div className="patient-card" key={index}>
          <Card className="card">
            <Typography variant="h6" className="patient-header cursor-pointer p-2" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ flex: '1', textAlign: 'center' }}>{patient.name}</span>
              <div onClick={() => {
                console.log(patient)
                  setId(patient._id);
                  // handleDelete(patient._id);
              }}>
                <DeleteOutlineIcon />
              </div>
            </Typography>
            <div className="card-body mb-0 pb-3 table-responsive patient-details-table-container">
              <table className="table" width="100%">
                <tbody>
                  <tr>
                    <td className="patient-label">Age</td>
                    <td className="separator">:</td>
                    <td className="patient-info">{patient.age}</td>
                  </tr>
                  <tr>
                    <td className="patient-label">Gender</td>
                    <td className="separator">:</td>
                    <td className="patient-info">{patient.gender}</td>
                  </tr>
                  <tr>
                    <td className="patient-label">Treatment Plan</td>
                    <td className="separator">:</td>
                    <td className="patient-info">{patient.treatmentPlan}</td>
                  </tr>
                  <tr>
                    <td className="patient-label">Medical History</td>
                    <td className="separator">:</td>
                    <td className="patient-info">{patient.medicalHistory}</td>
                  </tr>
                  <tr>
                    <td className="patient-label">Conditions</td>
                    <td className="separator">:</td>
                    <td className="patient-info">{patient.conditions}</td>
                  </tr>
                  <tr>
                    <td className="patient-label">Medications</td>
                    <td className="separator">:</td>
                    <td className="patient-info">{patient.medications}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      ))}
      
    </div>
  );
};

export default PatientCard;
