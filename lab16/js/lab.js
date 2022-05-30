/*
 * Author:    Kekoa Kailiawa <kkailiaw@ucsc.edu>
 * Created:   05.30.2022
 * License:   Public Domain
*/

// get Ajax function
var endpoint = "https://breakingbadapi.com/api/character/random";

function getAjax() {
	$.ajax({
  	url: endpoint,
    type: "GET",
    data: {
    }
  })
  .done(function(data){
  	console.log("Worked!");
    var firstBB = data[0];
    console.log(firstBB);
    var title = firstBB.name;
    var descr = firstBB.occupation;
    var imgUrl = firstBB.img;
    console.log(title, descr, imgUrl);
  	$("#output").html("<h2>" + title + "</h2>");
  	$("#output").append("<img src=" + imgUrl + ">");
  	$("#output").append("<h4>" + descr + "</h4>");
  })
  .fail(function(request, error){
  	$("#output").html("Something fucked up.");
  })
}

$("button").click(getAjax);
