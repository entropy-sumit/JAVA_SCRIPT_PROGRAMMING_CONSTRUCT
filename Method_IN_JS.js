//slice
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var sliceCheck = fruits.slice(1, 4); //starting index and endIndex-1


//Splice
var fruits = ["Banana", "Orange", "Apple", "Mango"];

var spliceCheck=fruits.splice(2, 1, "Lemon", "Kiwi");//at position 2,add 2 element and delete 1 element after add

//push and pop
var pushandpop = ["a", "b", "c", "d"];
pushandpop.push("e") //a,b,c,d,e
var popdata=pushandpop.pop()///a,b,c,d
//unshift and shift
var pushandpop = ["b", "c", "d"];
pushandpop.unshift("a")//a,b,c,d
var popdata=pushandpop.shift()//b,c,d


//foreach loop
var foreachloop = ["a", "b", "c", "d"];

console.log("foreach loop-------------")

foreachloop.forEach(myfun)

function myfun(value,index) //b,1
{
    console.log("value: "+value+" index: "+index)
}
//reduce
let emparr=[0,1,1,1] //3

// let sum=0;//3

// for(let a of emparr){
//     sum=sum+a;
// }


console.log("---reduce function-------")
//var data=emparr.reduce(reducefunction) //3

// function reducefunction(previousNumber,currentNumber){
//     return previousNumber+currentNumber
// }

var data1=emparr.reduce((a,sum)=> a+sum,0)

console.log("Sum of array: "+data1);

//spread
var checkspred = ["Banana", "Orange", "Apple", "Mango"];

var newArray=[...checkspred]


function method1([first,second]){ 
    console.log(first,second)
}

function method2(...checkspred){ 
    console.log(checkspred[0])
}

method2(checkspred)