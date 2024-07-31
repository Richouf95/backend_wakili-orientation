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
    },
    role: {
        type: String,
        required: true,
        default: "school"
    }
});

// Static SingUp method
schoolOwnerSchema.statics.singup = async function (email, name, telephone, pwd) {

    // Validator
    if (!email || !name || !telephone || !pwd) {
        throw Error('Tous les champs doivent être remplis !');
    }

    if (!validator.isEmail(email)) {
        throw Error("L'Email saisi est incorrect !");
    }

    if (!validator.isLength(telephone, { min: 8, max: 8 }) || !validator.isNumeric(telephone)) {
        throw Error("Le numéro de téléphone saisi est incorrect. Veuillez le réécrire sans l'indicatif");
    }

    if (!validator.isLength(name, { min: 3, max: undefined })) {
        throw Error('Le nom doit comporter au moins 3 caractères !');
    }

    if (!validator.isStrongPassword(pwd)) {
        throw Error("Le mot de passe n'est pas assez sécurisé ! Veuillez utiliser un mot de passe contenant au moins 8 caractères, avec une combinaison de lettres majuscules et minuscules, de chiffres et de caractères spéciaux.");
    }

    const exists = await this.findOne({ email });

    if (exists) {
        throw Error("L'adresse e-mail est déjà utilisée !");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(pwd, salt);

    const schoolOwner = await this.create({ email, name, telephone, pwd: hash });

    return schoolOwner;
}

// Static login method
schoolOwnerSchema.statics.login = async function (email, pwd) {

    if (!email || !pwd) {
        throw Error('Tous les champs doivent être remplis !');
    }

    const schoolOwner = await this.findOne({ email })

    if (!schoolOwner) {
        throw Error("L'Email saisi est incorrect !");
    }

    const match = await bcrypt.compare(pwd, schoolOwner.pwd);

    if (!match) {
        throw Error("Le mot de passe saisi est incorrect !");
    }

    return schoolOwner;
}

module.exports = mongoose.model('SchoolOwner', schoolOwnerSchema);