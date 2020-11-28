var today = new Date();
var hourNow = today.getHours();
var greeting;

let firstName = prompt("What's your name?");
let confirmation = confirm("Are you sure your name is "+firstName+"?");

if (hourNow > 18 && confirmation == true) {
    greeting = 'Good Evening! '+firstName;
}
else if ( hourNow > 18 && confirmation != true) {
      greeting = 'Good evening! Glad you are here!';
}
else if (hourNow > 12) {
    greeting = 'Good afternoon! ' +firstName;
}
else if (hourNow > 0) {
    greeting = 'Good Morning!' + firstName;
}else {
    greeting = 'Welcome!' + firstName;
}
document.write('<h1>' + greeting + '</h1>')