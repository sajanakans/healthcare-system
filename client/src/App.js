import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/pages/home/Home.jsx'
import PatientAndVisitors from './components/pages/patientsandvisitors/PatientsAndVisitors.jsx';
import FindDoctor from './components/pages/FindDoctor.jsx';
import MedicalRecords from './components/pages/patientsandvisitors/MedicalRecords.jsx';
import ProtectedRoutes from './components/auth/ProtectedRoutes.jsx';
import AddPatientRecord from './components/pages/patientsandvisitors/AddPatientRecord.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/find-doctor" element={<FindDoctor/>} />
        <Route path='/patients-visitors' element={<PatientAndVisitors/>} />
        <Route element={<ProtectedRoutes/>}>
          <Route path="/patients-visitors/medical-records" element={<MedicalRecords/>} />
          <Route path="/patients-visitors/add-medical-records" element={<AddPatientRecord/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
