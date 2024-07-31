const Presentation = require('../models/schoolPresentationModel');
const mongoose = require('mongoose');

// Get all schools presentations
const getAllSchoolPresentation = async(req, res) => {
    // Not yet
}

// Get a single school presentation
const getSchoolPresentation = async(req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "No such school presentation"});
    }

    try {
        const presentation = await Presentation.findOne({ school: id }).lean();

        if (!presentation) {
            return res.status(404).json({error: "No such school presentation !!!!"});
        }

        return res.status(200).json(presentation)
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
}

// Create new school prensentation
const createSchoolPresentation = async(req, res) => {
    const { content, school } = req.body;

    try {
        const presentation = await Presentation.create({ content, school });
        return res.status(200).json(presentation)
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}

// Update a school presentation
const updateSchoolPresentation = async(req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "No such presentation" });
    }

    const presentation = await Presentation.findByIdAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!presentation) {
        res.status(404).json({ error: "No such presentation" });
    }

    res.status(200).json(presentation);
}

// Delete a school presentation
const deleteSchoolPresentation = async(req, res) => {
    // Not yet
}

module.exports = {
    getAllSchoolPresentation,
    getSchoolPresentation,
    createSchoolPresentation,
    updateSchoolPresentation,
    deleteSchoolPresentation
}