/*
 * Author:    Kekoa Kailiawa <kkailiaw@ucsc.edu>
 * Created:   05.18.2022
 * License:   Public Domain
*/

function fizzBuzzBoom () {
  for (i=1; i <= 200; i++) {
      if (i%105 == 0) {
          console.log("FizzBuzzBoom!");
      $("#output").append("<p>" + "FizzBuzzBoom!" + "</p>")
    } else if (i%35 == 0) {
          console.log("BuzzBoom!");
      $("#output").append("<p>" + "BuzzBoom!" + "</p>")
    } else if (i%21 == 0) {
          console.log("Buzz!");
      $("#output").append("<p>" + "FizzBoom!" + "</p>")
    } else if (i%15 == 0) {
          console.log("Boom!");
      $("#output").append("<p>" + "FizzBuzz!" + "</p>")
    } else if (i%7 == 0) {
          console.log("Boom!");
      $("#output").append("<p>" + "Boom!" + "</p>")
    } else if (i%5 == 0) {
          console.log("Buzz!");
      $("#output").append("<p>" + "Buzz!" + "</p>")
    } else if (i%3 == 0) {
          console.log("Fizz!");
      $("#output").append("<p>" + "Fizz!" + "</p>")
    } else {
          console.log(i);
      $("#output").append("<p>" + i + "</p>")
      }
  }
}
fizzBuzzBoom();
