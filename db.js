let maxId = 1;

let notesList = [{
    "id": 1,
    "title": "fdas",
    "tag": 12
},
{
    "id": 2,
    "title": "fdas",
    "tag": 12
},
{
    "id": 3,
    "title": "fdas",
    "tag": 12
},
{
    "id": 4,
    "title": "fdas",
    "tag": 12
}];

function getMaxId() {
    for (let note of notesList) {
        if (note.id > maxId) {
            maxId = note.id;
        }
    }
}

getMaxId();

export function allNotes() {
    return notesList;
}

export function createNote(dto) {
    const newNote = {
        "id": maxId++,
        "title": dto.title,
        "tag": dto.tag
    }
    notesList.push(newNote);
}

export function deleteNote(dto) {
    const index = notesList.findIndex((i) => i.id === dto.id);
    if(index === -1){
        return false;
    }
    notesList.splice(index, 1);
}