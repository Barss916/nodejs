let maxId = 1;

let notesList = [{
    "id" : 1,
    "title" : "fdas",
    "tag" : 12
}];

function getMaxId() {
    for (let note of notes){
        if (note.id > maxId){
            maxId = note.id;
        }
    }
}

getMaxId();

export function allNotes(){
    return notesList;
}

export function deleteNote (idx) {
    for(let note of notesList){
        if (note.id === idx){
            notesList.splice();
        }
    }
}

export function createNote(dto){
    const newNote = {
        "id" : maxId++,
        "title" : dto.title,
        "tag" : dto.tag
    }
}