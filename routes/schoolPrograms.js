const express = require('express');
const {
    getAllSchoolPrograms,
    getSchoolProgram,
    createSchoolProgram,
    updateSchoolProgram,
    deleteSchoolProgram
} = require('../controllers/schoolProgramsControllers')

const router = express.Router();

// Get all Programs
router.get('/all-programs', getAllSchoolPrograms)

// Get a single Program
router.get('/:id', getSchoolProgram)

// Create new Program
router.post('/create-program', createSchoolProgram)

// Update a Program
    // Not yet

// Delete Program
    // Not yet

module.exports = router;