
var Data1= '{"first":"Anna", "last":"Chernova", "city":"Cincinnati"}';
var Data = JSON.parse(Data1);
console.log(Data);

document.getElementById("message").innerHTML=Data.first;
