'use strict'

function testListHasArray(){
  var notelist = new Notelist;
  assert.isEq(notelist.array.length, 0);
}

testListHasArray();


function testPutsNoteInArray(){
  var notelist = new Notelist;
  notelist.addNote("new note");
  assert.isEq(notelist.array[0].text, "new note");
}

testPutsNoteInArray();
