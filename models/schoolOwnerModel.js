const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const schoolOwnerSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    telephone: {
        type: String,
        required: true
    },
    pwd: {
        type: String,
        required: true
    }
});

// Static SingUp method
schoolOwnerSchema.statics.singup = async function (email, name, telephone, pwd) {

    // Validator
    if (!email || !name || !telephone || !pwd) {
        throw Error('All fields must be filled !');
    }

    if (!validator.isEmail(email)) {
        throw Error('Email is not valid !');
    }

    if (!validator.isLength(telephone, { min: 8, max: 8 }) || !validator.isNumeric(telephone)) {
        throw Error('Telephone is not valid!');
    }

    if (!validator.isLength(name, {min: 3, max: undefined})) {
        throw Error('Name is not valid !');
    }

    if (!validator.isStrongPassword(pwd)) {
        throw Error('Password not strong enough !');
    }

    const exists = await this.findOne({ email });

    if (exists) {
        throw Error('Email already in use !');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(pwd, salt);

    const schoolOwner = await this.create({email, name, telephone, pwd: hash});

    return schoolOwner;
}

// Static login method
schoolOwnerSchema.statics.login = async function (email, pwd) {

    if (!email || !pwd) {
        throw Error('All fields must be filled !');
    }

    const schoolOwner = await this.findOne({ email })

    if (!schoolOwner) {
        throw Error('Icorrect Email !');
    }

    const match = await bcrypt.compare(pwd, schoolOwner.pwd);

    if (!match) {
        throw Error('Incorrect Password');
    }

    return schoolOwner;
}

module.exports = mongoose.model('SchoolOwner', schoolOwnerSchema);