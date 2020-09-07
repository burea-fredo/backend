const notesCtrl = {};

const Note = require("../model/Note");


notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
}

notesCtrl.createNote = (req, res) => {
    const newNote = new Note({
        title: req.body.title,
        content: req.body.content
    })

    newNote.save(function (err) {
        if (err) {
            return res.status(400).send({ success: false });
        }
        console.log("INFO: Note created sucessfully");
        res.status(200).json({ success: true })
    });

}

notesCtrl.getNote = (req, res) => {
    const noteId = req.params.id;
    Note.findById(noteId, (err, note) => {
        if (err) {
            return res.status(400).send({ success: false })
        }

        console.log("INFO: Getting note with id:", noteId);
        return res.status(200).json(note);
    });
}

notesCtrl.updateNote = (req, res) => {
    const { title, content } = req.body;
    const noteId = req.params.id
    Note.findOneAndUpdate(noteId, {
        title: title,
        content: content
    }, (err) => {
        if (err) {
            return res.status(400).send({ success: false })
        }
        console.log("INFO: Update note with id:", noteId);
        return res.json({ success: true });
    });
}

notesCtrl.deleteNote = (req, res) => {
    const noteId = req.params.id;
    Note.findByIdAndDelete(noteId, (err) => {
        if (err) {
            return res.status(400).send({ success: false })
        }

        console.log("INFO: Delete note with id:", noteId)
        res.json({ success: true });
    });
}

module.exports = notesCtrl;
