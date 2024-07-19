const express = require('express');
const {
    getAllSchoolOwner,
    getSchoolOwner,
    singupSchoolOwner,
    loginSchoolOwner,
} = require('../controllers/schoolOwnerControllers')

const router = express.Router();

// Get all School Owner
router.get('/all-school-owner', getAllSchoolOwner)

// Get a single school owner
router.get('/:id', getSchoolOwner)

// Singup
router.post('/singup', singupSchoolOwner)

// Login
router.post('/login', loginSchoolOwner)

module.exports = router;