(function(exports) {

  function Note(text) {
    this.text = text;
  }

Note.prototype.returnsText = function () {
  return this.text
};

exports.Note = Note;

})(this);
