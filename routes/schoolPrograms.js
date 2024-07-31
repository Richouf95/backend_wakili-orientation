const express = require('express');
const {
    getAllSchoolPrograms,
    getSchoolProgram,
    getProgramsBySchoolId,
    getSchoolsProgramsByDomain,
    createSchoolProgram,
    updateSchoolProgram,
    deleteSchoolProgram
} = require('../controllers/schoolProgramsControllers')

const router = express.Router();

// Get all Programs
router.get('/all-programs', getAllSchoolPrograms)

// Get a single Program
router.get('/:id', getSchoolProgram)

// Get a programs by school id
router.get('/school/:id', getProgramsBySchoolId)

// Get by domaine
router.get('/domaine/:domaine', getSchoolsProgramsByDomain)

// Create new Program
router.post('/create-program', createSchoolProgram)

// Update a Program
router.patch('/update-program/:id', updateSchoolProgram)

// Delete Program
    // Not yet

module.exports = router;