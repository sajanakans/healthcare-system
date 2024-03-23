const mongoose = require('mongoose');

// Define a new schema for adding patient info 
const PatientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
      type: Number,
      validate: {
          validator: function(value) {
              return value <= 100;
          },
          message: 'Invalid Age'
      }
    },
    gender: {
      type: String,
      required: true
    },
    treatmentPlan: {
      type: String,
      required: true
    },
    medicalHistory: {
      type: String,
      required: true
    },
    conditions: {
      type: String,
      required: true
    },
    medications: {
      type: String,
      required: true
    }
});

const myDB = mongoose.connection.useDb('healthcaresys')

// Create a model from the schema
const Patient = myDB.model('Patient', PatientSchema, 'patients');

// Export the Patient model
module.exports = Patient;
