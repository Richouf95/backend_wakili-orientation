const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schoolSchema = new Schema({
    t_id: {
        type: String
    },
    ownerAcount: {
        type: Schema.Types.ObjectId,
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
    },
    schoolLogo: {
        url: {
            type: String
        },
        public_id: {
            type: String
        }
    },
    publishStatus: {
        type: Boolean,
        required: true,
        default: false
    }
}, {timestamps: true});

module.exports = mongoose.model('School', schoolSchema);