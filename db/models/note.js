const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    important:{
        type: Boolean,
        required: true
    },
    like:{
        type: Number,
        required: true
    },
    comments:{
        type: Array,
        required: true
    }
})


const Note = mongoose.model('Note',noteSchema);

module.exports = Note;