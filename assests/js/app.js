
$(document).ready(function() {

 $('#search').click(function() {

   var searchTerm= $('#searchTerm').val();
   //format is automatically Json
   var url ="https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm + "&callback=?";

   $.ajax({
     type:"GET",
     url:url,
     asyc:false,
     dataType: "json",
     success: function(data){
       // FIXME: look into sending the info out to each list individually
    //  console.log(data[1][0]); // =>Heading
       $("#output").prepend(data[1][0]);
      //  console.log(data[2][0]);//=>Description
      $("#output").prepend(data[2][0]);
      //  console.log(data[3][0]);//=>Link
      $("#output").prepend(data[3][0]);

      for (var i = 0; i < data.length; i++) {
      $('#output').prepend("<li><a href="+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
      }

     },
     error:function(errorMessage){
       alert("Error");
     }
   });

 });
});

// NOTE: I need to ensure that enter and submit are the same thing.
