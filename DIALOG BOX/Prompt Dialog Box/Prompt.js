function name(fname,lname)
{
const prompt = require('prompt-sync')();

var fname = prompt("enter your first name : ");
var lname = prompt("enter your last name : ");
console.log("your full name ",fname,lname);

}
name()