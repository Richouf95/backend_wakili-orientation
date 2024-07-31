const express = require('express');
const {
    getAllSchools,
    getSchool,
    getSchoolByOwnerId,
    createSchool,
    updateSchool,
    deleteSchool
} = require('../controllers/schoolControllers');

const router = express.Router();

// Get all school datas
router.get('/all-schools', getAllSchools);

// Get a single school datas
router.get('/:id', getSchool);

// Get school by owner id
router.get('/owne-school/:id', getSchoolByOwnerId)

// Create new school
router.post('/create-school', createSchool)

// Update a school data
router.patch('/update-school/:id', updateSchool)

// Delete a school
    // Not yet

module.exports = router;