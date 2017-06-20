function testNoteHasText(){
  note.text1("not naughty");
  assert.isEq(note.text, "not naughty");
}

testNoteHasText();

function testListHasArray(){
  notelist.list();
  assert.isEq(notelist.array.length, 0);
}

testListHasArray();
