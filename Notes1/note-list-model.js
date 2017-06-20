var notelist = (function(){

  'use strict';

  return {

    list: function() {
      this.array = []
    },

    addNote: function(string) {
      note.text1(string);
      notelist.array.push(note)

    },

    doHTML: function() {
      notelist.array.forEach(function(note) {
        console.log("<ul><li><div>" + note.text + "</div></li></ul>");
      })
    },
  };

}());


// function NoteList() {
//   this.array = [];
// }
