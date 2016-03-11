/*Write a function to count the
number of div elements on the web page*/

var doc = document;
function numberOfElements(doc){
	var countDiv = doc.getElementsByTagName('div');
	console.count(countDiv.length);
}

numberOfElements(doc);