function testNoteHasText(){
  note = new Note("I hate bowling");
  assert.isEq(note.text, "I hate bowling")
}

testNoteHasText();

function testListHasArray(){
  notelist = new Notelist;
  assert.isEq(notelist.array.length, 0);
}

testListHasArray();


function testPutsNoteInArray(){
  notelist.addNote("new note");
  assert.isEq(notelist.array[0].text, "new note");
}

testPutsNoteInArray();

function testListReturnsHTML(){
  notelist.addNote("I hate bowling");
  assert.isEq(notelist.doHTML(), "<ul><li><div>I hate bowling</div></li></ul>");
}

testListReturnsHTML();
