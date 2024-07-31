const Program = require('../models/schoolProgramsModel');
const mongoose = require('mongoose');

// Get all Programs
const getAllSchoolPrograms = async (req, res) => {
    const programs = await Program.find({});

    return res.status(200).json(programs);
}

// Get a single Program by id
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

// Get programs by school id
const getProgramsBySchoolId = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such program" });
    }

    try {
        const program = await Program.find({ school: id }).lean();

        if (!program) {
            return res.status(404).json({ error: "No such progam" });
        }

        return res.status(200).json(program)
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}

// Get schools program by domaine name
const getSchoolsProgramsByDomain = async (req, res) => {
    const { domaine } = req.params;

    if (!domaine) {
        return res.status(400).json({ error: "Category parameter is required" });
    }

    try {
        // Creating a case-insensitive regular expression
        const programs = await Program.find({ domaine }).lean();

        if (programs.length === 0) {
            return res.status(404).json({ error: "No programs found in the given category" });
        }

        return res.status(200).json(programs);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

// Create new Program
const createSchoolProgram = async (req, res) => {
    const { school,
        t_id,
        programLevel,
        authorisationDecree,
        name,
        domaine,
        programDetails } = req.body;

    try {
        const program = await Program.create({...req.body});

        return res.status(200).json(program);
    } catch (err) {
        return res.status(400).json({ error: err.message })
    }
}

// Update a Program
const updateSchoolProgram = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "No such Program !!!" });
    }

    const program = await Program.findByIdAndUpdate(id, { ...req.body }, { new: true });

    if (!program) {
        return res.status(404).json({ error: "No such Program ???" });
    }

    return res.status(200).json(program);
}

// Delete Program
const deleteSchoolProgram = async (req, res) => {

}

module.exports = {
    getAllSchoolPrograms,
    getSchoolProgram,
    getProgramsBySchoolId,
    getSchoolsProgramsByDomain,
    createSchoolProgram,
    updateSchoolProgram,
    deleteSchoolProgram
}