/*
 * Author:    Kekoa Kailiawa <kkailiaw@ucsc.edu>
 * Created:   05.11.2022
 * License:   Public Domain
*/

//Find the section you want to add the button to
//Create the button
//Give it a text label
//Add it to the section

//Add a click event to each button
//Find the challenge, problems, or results section the button is in.
//Toggle a class special within the <div> of the section
$("#c-button").click(function(){
  $("#challenge").toggleClass("sectionbox1");
})
$("#p-button").click(function(){
  $("#problem").toggleClass("sectionbox2");
})
$("#r-button").click(function(){
  $("#results").toggleClass("sectionbox3");
})
