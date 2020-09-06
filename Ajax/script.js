
function getData() {
  $.ajax({
    url:'data.php',
    method: "GET",
    success: function (data) {
      var album = data[i];
      var target = $(".titoli");
      var template = $("#album-template").html();
      var compiled = Handlebars.compile(template);
      for (var i = 0; i < data.length; i++) {
        console.log("ok");
        var albumHTML = compiled({
          "poster": album["poster"],
          "title": album["title"],
          "author": album["author"],
          "genre": album["genre"],
          "year": album["year"],

        });
        target.append(albumHTML);


      }
    },
    error: function (error) {
      console.log(error);
    }

  });
}



function init() {
  getData();
}

$(document).ready(init);
