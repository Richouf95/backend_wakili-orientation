const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schoolSchema = new Schema({
    ownerAcount: {
        type: String,
        default: "N/A",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    openingDecree: {
        type: String,
        default: "N/A",
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
        type: [String],
        required: true
    },
    servicesParaScolaire: {
        type: [String]
    },
    coordonnee: {
        type: Object
    }
}, {timestamp: true});

module.exports = mongoose.model('School', schoolSchema);