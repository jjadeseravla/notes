function testNoteHasText(){
  note.text1("not naughty");
  assert.isEq(note.text, "not naughty");
}

testNoteHasText();

function testListHasArray(){
  noteList = new NoteList();
  assert.isEq(noteList.array.length, 0);
}

testListHasArray();
