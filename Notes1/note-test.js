function testNoteHasText(){
  note = new Note("not naughty");
  assert.isEq(note.text, "not naughty");
}

testNoteHasText();
