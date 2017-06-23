(function(exports) {

  function News() {
    this.story = [];
    this.articleURL = "https://content.guardianapis.com/search?api-key=aa5fcbdd-e138-43c2-9986-9411a060dc47";

  };

  News.prototype.getStory = function () {
    var request =  new XMLHttpRequest();
    request.open('GET', this.articleURL, false);
    request.send();

      if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.responseText);
        var listOfArticles = data.response.results;
        for(var i = 0; i < listOfArticles.length; i++) {
          this.story.push(listOfArticles[i].webTitle);
        }
      }
    };
    News.prototype.listHeadlines = function () {
      div = document.getElementById("header");
      var list = "<ul>";
      for(var i = 0; i < this.story.length; i++) {
        list += ("<li><div>" + this.story[i] + "</div></li>")
      }
      list += "</ul>";
      console.log(list);
      div.innerHTML = list;
    };


exports.News = News;
})(this);
