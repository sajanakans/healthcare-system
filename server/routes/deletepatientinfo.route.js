const express = require('express');
const Patient = require('../database/models/patient');

const router = express.Router();

router.delete('/:id', async(req, res) => {
  try {
    const deletePatient = await Patient.findByIdAndDelete(req.params.id, req.body)

    res.status(200).json({
      status: 'success',
      data: deletePatient
    })
  } catch(err) {
    res.status(500).json({
      status: 'Failed',
      message: err
    })
  }
});

module.exports = router;