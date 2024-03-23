const express  = require('express');
const Patient = require('../database/models/patient');
const { authenticate, authorize } = require('../middleware/auth'); 

const router = express.Router();

// router.get('/', async(req, res) => {
router.get('/', authenticate, authorize('admin'), async (req, res) => {
  const messages = await Patient.find({})
  
  try {
    res.status(200).json({
      status: 'success',
      data: {
        messages
      }
    })
  } catch(err) {
    res.status(500).json({
      status: 'Failed',
      message: err
    })
  }
});

module.exports = router;