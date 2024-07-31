const mongoose = require('mongoose');
const Domaine = require('../models/domaineModel');


// Get all domaine
const getAllDomaines = async (req, res) => {
    const domaines = await Domaine.find({});

    return res.status(200).json(domaines);
}

// Get a domaine
const getDomaine = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such domaine" })
    }

    try {
        const domaine = await Domaine.findById(id).lean();

        if (!domaine) {
            return res.status(404).json('No such domaine');
        }

        return res.status(200).json(domaine);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Create domaine
const createDomaine = async (req, res) => {
    const { name } = req.body;

    try {
        const domaine = await Domaine.create({ name });

        return res.status(200).json(domaine);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Update domaine
// Not yet

// Delete domaine
// Not yet


module.exports = {
    getAllDomaines,
    getDomaine,
    createDomaine
}