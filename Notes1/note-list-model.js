(function(exports) {

  function Notelist() {
    this.array = [];
  }

  Notelist.prototype.addNote = function (text) {
    note = new Note(text);
    this.array.push(note);
  };

  Notelist.prototype.doHTML = function () {
    var result;
    this.array.forEach(function(note) {
      result = "<ul><li><div>" + note.text + "</div></li></ul>";
    })
    return result;
  };

exports.Notelist = Notelist;

})(this);
