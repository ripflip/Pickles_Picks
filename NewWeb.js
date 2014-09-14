var clientName = "Kevin Client";
var age = 42;
var rawr = 2.718;

var length = clientName.length;
var upcase = clientName.toUpperCase;
//var boo = 10 + "rawr" + parseInt("42 is the answer");
var char1 = clientName[0];

var sum = 0;
for (var i = 0; i < 20; i++)
  sum += i;

var rand1to10 = Math.floor(Math.random() * 10 + 1);
var best = Math.E;

while (1 > 2)
  2 + 2;

do {
  2 + 2;
} while (1 > 2);

/* POP UP BOXES 
alert("This is an alert!");
confirm("Are you sure?");
prompt("What is your quest?");
*/

/* Arrays */
var ducks = ["a", "b", "c"];
var arr = [];
arr[0] = "rawr";
arr[1] = "boo";

var string = "a b c d";
var letters = string.split(" ");
letters.reverse();

window.onload = pageLoad;
function pageLoad() {
  var okButton = document.getElementById("foobarbaz"); 
  okButton.onclick = tay;
  var paragraph = document.getElementById("cookie");
  paragraph.onclick = love;
  foo;
  document.getElementById("changeColor").onclick = changeColor;
}

function changeColor() {
  //this.style.color = "red";
  //this.style.fontSize = "24pt";
  this.className = "changeColor";
}

function tay() {
  alert("rawr");
  // prompt("RAWR");
  // confirm("I love you :)");
}




/* Document Object Model */

/* KEY = A */
function changeText() {
  var span = document.getElementById("output");
  var textBox = document.getElementById("textbox"); 
  textBox.value = span.innerHTML;
  span.innerHTML = "Hello, how are you?";
}

function love() {
  var munch = document.getElementById("para");
  munch.innerHTML = "I LOVE YOU";
}

/* *** this *** */
function foo() {
  alert(this.id + "is checked!");
}










