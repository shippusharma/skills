// Stands in for the SQLite database described in db.sql.
const notes = [];
let nextId = 1;

export const store = {
  listNotes: userId => notes.filter(note => note.user_id === userId),
  createNote(userId, { title, body }) {
    const note = { id: nextId++, user_id: userId, title, body, updated_at: new Date().toISOString() };
    notes.push(note);
    return note;
  },
  updateNote(userId, id, changes) {
    const note = notes.find(n => n.id === id && n.user_id === userId);
    if (!note) return undefined;
    Object.assign(note, changes, { updated_at: new Date().toISOString() });
    return note;
  },
  deleteNote(userId, id) {
    const index = notes.findIndex(n => n.id === id && n.user_id === userId);
    if (index !== -1) notes.splice(index, 1);
  },
};
