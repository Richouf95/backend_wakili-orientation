const School = require('../models/schoolModel');
const mongoose = require('mongoose');
const cloudInary = require('../utils/cloudInary');

// Get all school datas
const getAllSchools = async (req, res) => {
    const schools = await School.find({});

    return res.status(200).json(schools);
}

// Get a single school datas
const getSchool = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such school" });
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

// Get school by owner id
const getSchoolByOwnerId = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such school" });
    }

    try {
        const school = await School.find({ ownerAcount: id });

        if (!school) {
            return res.status(404).json({ error: "No such school" });
        }

        return res.status(200).json(school);
    } catch (err) {
        return res.status(500).json({ error: err.message });
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
        coordonnee,
        ownerAcount,
        t_id } = req.body;

    try {
        const school = await School.create({
            name,
            openingDecree,
            localisation,
            typeEtablissement,
            niveauEtude,
            servicesParaScolaire,
            coordonnee,
            ownerAcount,
            t_id
        });
        return res.status(200).json(school);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
}

// Update a school data
const updateSchool = async (req, res) => {
    const { id } = req.params;
    const { schoolLogo } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "No such school" });
    }

    if (schoolLogo === null || schoolLogo === undefined) {
        const school = await School.findByIdAndUpdate({ _id: id }, {
            ...req.body
        }, { new: true });

        if (!school) {
            return res.status(404).json({ error: "No such school" });
        }

        return res.status(200).json(school);
    }

    if (schoolLogo) {
        try {
            const inaryResult = await cloudInary.uploader.upload(schoolLogo, {
                folder: "Wakili_Orientation_School_Logo",
                use_filename: true,
                unique_filename: false
            });

            const school = await School.findByIdAndUpdate({ _id: id }, {
                schoolLogo: {
                    url: inaryResult.url,
                    public_id: inaryResult.public_id
                }
            }, { new: true });

            if (!school) {
                return res.status(404).json({ error: "No such school" });
            }

            return res.status(200).json(school);
        } catch (error) {
            console.error('Error uploading to Cloudinary:', error);
            return res.status(500).json({ error: "Failed to upload logo" });
        }
    }
}

// Delete a school
const deleteSchool = async (req, res) => {
    // Not yet
}

module.exports = {
    getAllSchools,
    getSchool,
    getSchoolByOwnerId,
    createSchool,
    updateSchool,
    deleteSchool
}