'use strict'

function testNoteHasText(){
  var note = new Note("I hate bowling");
  assert.isEq(note.text, "I hate bowling")
}

testNoteHasText();

function testNoteReturnsTextMethod() {
  var note = new Note('hello world');
  assert.isEq(note.returnsText(), "hello world")
}

testNoteReturnsTextMethod();
