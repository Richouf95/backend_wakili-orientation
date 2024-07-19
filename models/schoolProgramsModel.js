const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const programDetailsSchema = new Schema({
    duration: {
        type: String
    },
    description: {
        type: String
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
    t_id: {
        type: String
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
        default: "N/A",
        required: true
    },
    domaine: {
        type: String,
        default: "N/A",
        required: true
    },
    programDetails: {
        type: programDetailsSchema,
    }
}, { timestamps: true });

module.exports = mongoose.model('Program', schoolProgramSchema);
