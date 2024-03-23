const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./database/connect');

const registerRoute = require('./routes/register.route')
const loginRoute = require('./routes/login.route')
const addPatientInfoRoute = require('./routes/addpatientinfo.route')
const getPatientInfoRoute = require('./routes/getpatientinfo.route')
const deletePatientInfoRoute = require('./routes/deletepatientinfo.route')

require('dotenv').config();
connectDB(process.env.MONGODB_URL);

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use('/register', registerRoute)
app.use('/login', loginRoute)
app.use('/add-patient-info', addPatientInfoRoute)
app.use('/get-patient-info', getPatientInfoRoute)
app.use('/delete-patient-info', deletePatientInfoRoute)
