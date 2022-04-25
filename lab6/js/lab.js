/**
 * Author:    Kekoa Kailiawa <kkailiaw@ucsc.edu>
 * Created:   04.25.2022
 * License:   Public Domain
 **/

 // Define Variables
 myTransport = ["car", "walking", "bus"];

 myMainRide = {
    make: 'Subaru',
    model: 'Impreza',
    color: 'grey',
    year: '2020',
    age: function () {
        return 2022-year;
    }
}

// Output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
