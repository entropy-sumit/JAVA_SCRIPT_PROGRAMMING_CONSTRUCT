let keystring='a string';
let keyObj={};
let keyFunc=function(){}


let myMap=new Map()
myMap.set(keystring, "value associated with  'a string'");
myMap.set(keyObj, 'value assciated with keyObj');
myMap.set(keyFunc, ' value associated with Key func');


let size=myMap.size;
let valstr=myMap.get(keystring);
let iskeyExist=myMap.get('a string');


console.log(size);
console.log(valstr);
console.log(iskeyExist);

for(let [key,value] of myMap)console.log("loop1: " +key + '=' +value)
for(let [key,value] of myMap.entries())console.log("loop2: " +key + '=' +value)
for(let key of  myMap.keys())console.log("loop3:" +key)
for(let value of myMap.values())console.log("loop4:" +value)

let first = new Map([1,'one'],[2,'two'],[3,'three'])
let second = new Map([1,'uno'],[2,'dos'])
let merged = new Map([...first, ...second,[1,'eins']])

let haskey =merged.has(1)
let delkey=merged.delete(1)
if(merged.has(1)) console.log(merged.get(1))
console.log("pos2:" +merged.get(2))
merged.clear();
console.log(merged,size)



