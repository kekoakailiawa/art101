/*
 * Author:    Kekoa Kailiawa <kkailiaw@ucsc.edu>
 * Created:   05.24.2022
 * License:   Public Domain
*/

// get Ajax function
function getAjax() {
	$.ajax({
    //url, type, data
  	url: "https://xkcd.com/572/info.0.json",
    type: "GET"
  })
  //append Ajax function to output
  .done(function(data){
  	console.log("Success");
  	$("#output").append("<h3>" + data.title + "</h3>");
    $("#output").append("<h4>" + data.year + "</h4>");
  	$("#output").append("<img src=" + data.img + ">");
  })
  //fail error pops up if JS doesn't run correctly
  .fail(function(request, error){
  	$("#output").html("Error.");
  })
}
//insert button
$("button").click(getAjax);
