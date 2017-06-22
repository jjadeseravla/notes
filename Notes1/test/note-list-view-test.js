'use strict'

function testListReturnsHTML(){
  var notelistView = new NotelistView();
  notelistView.notelist.addNote("I hate bowling");
  assert.isEq(notelistView.doHTML(), "<ul><li><div>I hate bowling</div></li></ul>");
}

testListReturnsHTML();

function testListReturnsEmptyHTML(){
  var notelistView2 = new NotelistView();
  notelistView2.notelist.addNote("");
  assert.isEq(notelistView2.doHTML(), "<ul><li><div></div></li></ul>");
}

testListReturnsEmptyHTML();

function testListReturnsMultipleHTML(){
  var notelistView3 = new NotelistView();
  notelistView3.notelist.addNote("hello");
  notelistView3.notelist.addNote("goodbye");
  assert.isEq(notelistView3.doHTML(), "<ul><li><div>hello</div></li><li><div>goodbye</div></li></ul>");
}

testListReturnsMultipleHTML();
