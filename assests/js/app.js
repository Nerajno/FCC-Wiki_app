
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
       console.log(data);
     },
     error:function(errorMessage){
       alert("Error");
     }
   });

 });
});
