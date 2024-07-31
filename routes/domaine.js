const express = require('express');
const {
    getAllDomaines,
    getDomaine,
    createDomaine
} = require('../controllers/domaineControllers');

const router = express.Router();

// Get all domaine
router.get('/all-domaine', getAllDomaines)

// Get a domaine
router.get('/:id', getDomaine)

// Create domaine
router.post('/create-domaine', createDomaine)

// Update domaine
    // Not yet

// Delete domaine
    // Not yet

module.exports = router;