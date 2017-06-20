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


function testPutsNoteInArray(){
  notelist.addNote("new note");
  assert.isEq(notelist.array[0].text, "new note");
}

// testPutsNoteInArray();

function testListReturnsHTML(){
  notelist.addNote("I hate bowling");
  assert.isTrue(notelist.doHTML() === "<ul><li><div>I hate bowling</div></li></ul>");
}

testListReturnsHTML();
