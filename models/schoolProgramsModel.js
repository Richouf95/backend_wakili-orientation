const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const programDetailsSchema = new Schema({
    duration: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    jobTraining: {
        type: String
    },
    prerequis: {
        type: String
    },
    cout: {
        type: Number,
        default: 0
    },
    langue: {
        type: String,
        default: 'Français'
    },
    cours: {
        type: [String],
        default: []
    },
    certificat: {
        type: String
    },
    modality: {
        type: String,
        enum: ['Présentiel', 'En ligne', 'Hybride'],
        default: 'Présentiel'
    }
}, { _id: false });

const schoolProgramSchema = new Schema({
    school: {
        type: Schema.Types.ObjectId,
        ref: 'School',
        required: true
    },
    programLevel: {
        type: String,
        required: true
    },
    authorisationDecree: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    domaine: {
        type: String,
        required: true
    },
    programDetails: {
        type: programDetailsSchema,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Program', schoolProgramSchema);
