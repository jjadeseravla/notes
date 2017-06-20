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
      var result;
      notelist.array.forEach(function(note) {
        result = "<ul><li><div>" + note.text + "</div></li></ul>";
      })
      return result;
    },
  };

}());


// function NoteList() {
//   this.array = [];
// }
