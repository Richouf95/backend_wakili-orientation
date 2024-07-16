const express = require('express');
const {
    getAllSchools,
    getSchool,
    createSchool,
    updateSchool,
    deleteSchool
} = require('../controllers/schoolControllers');

const router = express.Router();

// Get all school datas
router.get('/all-schools', getAllSchools);

// Get a single school datas
router.get('/:id', getSchool);

// Create new school
router.post('/create-school', createSchool)

// Update a school data
    // Not yet

// Delete a school
    // Not yet

module.exports = router;