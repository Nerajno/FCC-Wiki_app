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
        // FIXME: look into sending the info out to each list individually
        //  console.log(data[1][0]); // =>Heading
        //  $("#output").prepend(data[1][0]);
        // //  console.log(data[2][0]);//=>Description
        // $("#output").prepend(data[2][0]);
        // //  console.log(data[3][0]);//=>Link
        // $("#output").prepend(data[3][0]);

        // NOTE: This clears the old search results when the scripts runs each time.
        $('#output').html('');
        //Need to understand this but it wrks
        for (var i = 0; i < data.length; i++) {
          $('#output').prepend("<li><a href=" + data[1][i] + ">" + data[3][i] + "</a><p>" + data[2][i] + "</p></li>");
        }
        console.log(data);
        // NOTE: This clears the search term box when the data is delivered.

      },
      error: function(errorMessage) {
        alert("Error, Api not connected");
      }
    });

  });
  $("#searchTerm").keyup(function(event) {
    if (event.keyCode == 13) {
      $("#search").click();
    }
  });

  // trigger submit on use of enter key

});




// NOTE: I need to ensure that the Enter key and search btn are the same thing.
