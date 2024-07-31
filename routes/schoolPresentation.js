const express = require('express');
const {
    getAllSchoolPresentation,
    getSchoolPresentation,
    createSchoolPresentation,
    updateSchoolPresentation,
    deleteSchoolPresentation
} = require('../controllers/schoolPresentationControllers');
const { route } = require('./school');
const { getSchool } = require('../controllers/schoolControllers');

const router = express.Router();

// Get all schools presentations
    // Not yet
    // router.get('/all-school-presentation', getAllSchoolPresentation);

// Get a single school presentation
router.get('/:id', getSchoolPresentation);

// Create new school prensentation
router.post('/add-school-presentation', createSchoolPresentation);

// Update a school presentation
router.patch('/:id', updateSchoolPresentation);

// Delete a school presentation

module.exports = router;