const School = require('../models/schoolModel');
const mongoose = require('mongoose');

// Get all school datas
const getAllSchools = async (req, res) => {
    const schools = await School.find({  });

    return res.status(200).json(schools);
}

// Get a single school datas
const getSchool = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such school"});
    }

    try {
        // Utilisation de lean() pour obtenir un objet JavaScript ordinaire
        const school = await School.findById(id).lean();

        if (!school) {
            return res.status(404).json({ error: "No such school" });
        }

        return res.status(200).json(school);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

// Create new school
const createSchool = async (req, res) => {
    const { name,
        openingDecree,
        localisation,
        typeEtablissement,
        niveauEtude,
        servicesParaScolaire,
        coordonnee } = req.body;

    try {
        const school = await School.create({name,
            openingDecree,
            localisation,
            typeEtablissement,
            niveauEtude,
            servicesParaScolaire,
            coordonnee});
        return res.status(200).json(school);
    } catch (err) {
        return res.status(400).json({error: err.message});
    }
}

// Update a school data
const updateSchool = async (req, res) => {
    // Not yet
}

// Delete a school
const deleteSchool = async (req, res) => {
    // Not yet
}

module.exports = {
    getAllSchools,
    getSchool,
    createSchool,
    updateSchool,
    deleteSchool
}