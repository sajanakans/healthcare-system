const express  = require('express');
const Patient = require('../database/models/patient');
const { authenticate, authorize } = require('../middleware/auth'); 

const router = express.Router();

// router.post('/', async(req, res) => {
router.post('/', authenticate, authorize('user'), async (req, res) => {
  try {
    console.log(req.body)
    const patient = new Patient(req.body);
    await patient.save();

    res.status(200).json({
      status: 'success',
      data: {
        patient
      }
    })
  } catch(err) {
    res.status(500).json({
      status: 'Failed',
      message: err.message
    })
  }
});

module.exports = router;