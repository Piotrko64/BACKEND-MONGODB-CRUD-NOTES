const express= require('express');
const router = express.Router();

const notesActions = require('../actions/api/noteActions');

router.get('/notes', notesActions.getAllNotes);
router.get('/notes/:id', notesActions.getNote);

router.post('/notes', notesActions.saveNote);
router.put('/notes/:id', notesActions.updateNote);
router.put('/notes/like/:id/:equal', notesActions.updateNoteLike);
router.delete('/notes/:id', notesActions.deleteNote);
module.exports = router;