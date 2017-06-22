NotelistView = function() {
    this.notelist = new Notelist();
  }

  NotelistView.prototype.doHTML = function () {
    var htmlstring = "<ul>";
    this.notelist.array.forEach(function(note) {
      htmlstring += "<li><div>" + note.text + "</div></li>";
    })
    return htmlstring + "</ul>";
  };
