module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    //create a new note
    app.post('/notes', notes.create);

    //retrieve notes
    app.get('/notes', notes.findAll);

    // Retrieve a single note
    app.get('/notes/:noteId', notes.findOne);

    //Update a note with noteID
    app.put('/notes/:noteId', notes.update);

    //Delete a note with note ID
    app.delete('/notes/:noteId', notes.delete);




}