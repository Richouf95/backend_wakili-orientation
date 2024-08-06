const SchoolOwner = require('../models/schoolOwnerModel');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.JWT_SECRETE, { expiresIn: '3d' });
}

// Get all School Owner
const getAllSchoolOwner = async (req, res) => {
    const schoolOwner = await SchoolOwner.find({  });

    return res.status(200).json({name: schoolOwner.name, telephone: schoolOwner.telephone, email: schoolOwner.email, role: schoolOwner.role});
}

// Get a single school owner
const getSchoolOwner = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such schoolOwner !" });
    }

    const schoolOwner = await SchoolOwner.findById({ _id: id });

    if (!schoolOwner) {
        return res.status(404).json({ error: "No such schoolOwner !" });
    }

    return res.status(200).json({name: schoolOwner.name, telephone: schoolOwner.telephone, email: schoolOwner.email, role: schoolOwner.role});
}

// Singup
const singupSchoolOwner = async (req, res) => {
    const { email, name, telephone, pwd, role } = req.body;

    try {
        const schoolOwner = await SchoolOwner.singup(email, name, telephone, pwd);

        const schoolOwnerId = await schoolOwner._id;

        const token = createToken(schoolOwner._id);

        return res.status(200).json({ token,  schoolOwnerId, role})
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}


// Login
const loginSchoolOwner = async (req, res) => {
    const { email, pwd } = req.body;

    try {
        const schoolOwner = await SchoolOwner.login(email, pwd);

        const token = createToken(schoolOwner._id);

        return res.status(200).json({ token, schoolOwnerId: schoolOwner._id, role: schoolOwner.role })
    } catch (err) {
        return res.status(500).json({error: err.message})
    }
}


module.exports = {
    getAllSchoolOwner,
    getSchoolOwner,
    singupSchoolOwner,
    loginSchoolOwner,
}