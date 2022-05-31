/*
 * Author:    Kekoa Kailiawa <kkailiaw@ucsc.edu>
 * Created:   05.30.2022
 * License:   Public Domain
*/

var endpoint = "https://breakingbadapi.com/api/character/random";
//function get AJAX
function getAjax() {
	$.ajax({
  	url: endpoint,
    type: "GET",
    data: {
    }
  })
  .done(function(data){
		//console.log function
  	console.log("Worked!");
		//console.log data
    var charBB = data[0];
    console.log(charBB);
		//input data from JSON and console.log it
    var title = charBB.name;
    var alt = charBB.occupation;
    var imgUrl = charBB.img;
    console.log(title, alt, imgUrl);
		//jquery append
  	$("#output").html("<h3>" + title + "</h3>");
  	$("#output").append("<img src=" + imgUrl + ">");
  	$("#output").append("<h4>" + alt + "</h4>");
  })
	//fail alert in console if needed
  .fail(function(request, error){
  	$("#output").html("ERROR.");
  })
}
//create button
$("button").click(getAjax);
