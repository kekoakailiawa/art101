/**
 * Author:    Kekoa Kailiawa <kkailiaw@ucsc.edu>
 * Created:   04.27.2022
 * License:   Public Domain
 **/

// sortUserName - a function that sorts the user input and sorts the letters of the sortUserName
function sortUserName () {
  var userName = window.prompt("Mornin'. Please tell me your name so I can fix it!");
  console.log("userName =", userName);
  // split string to Array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  // sort the Array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  // join array back to string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  // return Function
  return nameSorted;
}

// Output
document.writeln("Yo, I fixed your name in alphabetical order: ",
        sortUserName(), "</br>");
