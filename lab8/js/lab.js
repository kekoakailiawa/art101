/*
 * Author:    Kekoa Kailiawa <kkailiaw@ucsc.edu>
 * Created:   05.2.2022
 * License:   Public Domain
*/

function add (x) {
    return (x + 3);
}

// test function
console.log("What is 20 + 3? ", add(20));
console.log("What is 441 + 3? ", add(441));

array = [1, 4, 7, 8, 12, 17]
console.log("My array", array);

var result = array.map(add);
// should return (4, 7, 10, 11, 15, 20)
console.log("Test of addition in array:",result);

var result = array.map(function(x){
    return x % 2 == 0;
})
// should return [false, true, false, true, true, false]
console.log("Evenness of array:", result);
