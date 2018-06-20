
var xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json', true);
xhr.send();

xhr.onreadystatechange = function(){
	console.log(xhr.readyState);
	console.log(xhr.status);
	console.log(xhr.statusText);
}
