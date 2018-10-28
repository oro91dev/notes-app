console.log('starting notes.js');
const fs = require('fs');

var addNote = (title, body) => {
    var notes = [];
    var note = {
        title, 
        body
    };

try {
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
}catch (e) {

}

var duplicateNotes = notes.filer((note) => note.title === title);

if(duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}
};
module.exports.addNote = () => {
    console.log('addnote');
    return "note";
};

var getAll = () => {
    console.log('Getting all notes');
  };
  
  var getNote = (title) => {
    console.log('Getting note', title);
  };
  
  var removeNote = (title) => {
    var notes = fetchNotes;
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
  };
  
  module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
  };