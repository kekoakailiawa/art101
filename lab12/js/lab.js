/*
 * Author:    Kekoa Kailiawa <kkailiaw@ucsc.edu>
 * Created:   05.16.2022
 * License:   Public Domain
*/

//Create a function getTeam()
//that takes a string as an argument: function getTeam(num)
function getTeam(num){
var remainder = num % 4;
  if (remainder == 0) {
  var str = "Los Angleles Lakers";

}else if (remainder == 1) {
  var str = "Golden State Warriors";

}else if (remainder == 2) {
  var str = "Miami Heat";

}else if (remainder == 3) {
  var str = "Boston Celtics";
  }
return str;
}

// attach click function to submit button
$("#button").click(function(){
var name = $("#input").val()
console.log(name);
var nameLength = name.length;
console.log(nameLength);
var team = getTeam(nameLength);
console.log(team);
$("#output").html("<h2>The NBA assigns you to the " + team + "</h2>");
})
