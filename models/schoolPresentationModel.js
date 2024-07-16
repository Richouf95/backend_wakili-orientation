const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schoolPresentationSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    school: {
        type: Schema.Types.ObjectId,
        ref: 'School',
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Presentation', schoolPresentationSchema);