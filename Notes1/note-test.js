function testNoteHasText(){
  note.text1("not naughty");
  assert.isEq(note.text, "not naughty");
}

testNoteHasText();
