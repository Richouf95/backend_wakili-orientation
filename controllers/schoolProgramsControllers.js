const Program = require('../models/schoolProgramsModel');
const mongoose = require('mongoose');

// Get all Programs
const getAllSchoolPrograms = async (req, res) => {
    const programs = await Program.find({});

    return res.status(200).json(programs);
}

// Get a single Program
const getSchoolProgram = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such program" });
    }

    try {
        const program = await Program.findById(id).lean();

        if (!program) {
            return res.status(404).json({ error: "No such progam" });
        }

        return res.status(200).json(program)
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}

// Create new Program
const createSchoolProgram = async (req, res) => {
    const { school,
        programLevel,
        authorisationDecree,
        name,
        domaine,
        programDetails } = req.body;

    try {
        const program = await Program.create({ school,
            programLevel,
            authorisationDecree,
            name,
            domaine,
            programDetails });

        return res.status(200).json(program);
    } catch (err) {
        return res.status(400).json({ error: err.message })
    }
}

// Update a Program
const updateSchoolProgram = async (req, res) => {

}

// Delete Program
const deleteSchoolProgram = async (req, res) => {

}

module.exports = {
    getAllSchoolPrograms,
    getSchoolProgram,
    createSchoolProgram,
    updateSchoolProgram,
    deleteSchoolProgram
}