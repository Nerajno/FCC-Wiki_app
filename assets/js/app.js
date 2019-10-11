var searchTerm;

$(document).ready(function() {
  $('#search').click(function() {
    var searchTerm = $('#searchTerm').val();
    //format is automatically Json
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&callback=?";
    $.ajax({
      type: "GET",
      url: url,
      asyc: false,
      dataType: "json",
      success: function(data) {
        // NOTE: This clears the old search results when the scripts runs each time.
        $('#output').html('');
        for (var i = 0; i < data[1].length; i++) {
          //push the data to the end.
          $('#output').append("<div class='card'><h2>" + data[1][i] + "</h2><p>" + data[2][i] +
            "</p><a class='highlight' href='" + data[3][i] + "' target='_blank'>Read More</a></div>");
        }
        console.log(data);
      },
      error: function(errorMessage) {
        alert("Empty Search query");
      }
    });
  });
  // trigger submit on use of enter key
  $("#searchTerm").keypress(function(e) {
    if (e.which === 13) {
      $("#search").click();
      return false;
    }
  });
});
