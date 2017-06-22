(function(exports) {

  function Notelist() {
    this.array = [];
  }

  Notelist.prototype.addNote = function (text) {
    note = new Note(text);
    this.array.push(note);
  };

exports.Notelist = Notelist;

})(this);
