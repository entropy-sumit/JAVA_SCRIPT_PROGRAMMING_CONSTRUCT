//uc1

var numArray = [0, 0, 0, 0, 0];
for (let i = 0; i < 5; i++) 
{
    numArray[i] = Math.floor(Math.random() * 1000);
    console.log(numArray[i]);
}
//Find the minimum and the maximum value.
let MaximumNumber = numArray[0];
let MinimumNumber = numArray[0];
for (let i = 0; i < 5; i++) 
{
    if (numArray[i] > MaximumNumber) 
    {
        MaximumNumber = numArray[i];
    }
    if (numArray[i] < MinimumNumber) 
    {
        MinimumNumber = numArray[i];
    }
}
console.log("Minimum Number:- " + MinimumNumber);
console.log("Maximum Number:- " + MaximumNumber);


// user input

//read line sync use take input user
var readlineSync = require('readline-sync');
var year = readlineSync.questionInt('Enter year:- ');


function checkLeapYear(year) 
{

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400))
    {
        console.log(year + ' is a leap year');
    } else 
    {
        console.log(year + ' is not a leap year');
    }
}
