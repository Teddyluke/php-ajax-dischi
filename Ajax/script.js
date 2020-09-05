
function getData() {
  $.ajax({
    url:'http://localhost/php-ajax-dischi/Ajax/data.php',
    method: "GET",
    success: function (data) {
      console.log(data);
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
