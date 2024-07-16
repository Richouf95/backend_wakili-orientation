const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schoolSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    openingDecree: {
        type: String,
        required: true
    },
    localisation: {
        type: String,
        required: true
    },
    typeEtablissement: {
        type: String,
        required: true
    },
    niveauEtude: {
        type: Array,
        required: true
    },
    servicesParaScolaire: {
        type: Array
    },
    coordonnee: {
        type: Object
    }
}, {timestamp: true});

module.exports = mongoose.model('School', schoolSchema);