/*var input = 'const getMessage = () => "Hello World";';
var output = Babel.transform(input, { presets: ['es2015'] }).code;
console.log(output);
*/


import Editor from "./editor.js"

(function(){


document.addEventListener('DOMContentLoaded',init)




function init(){
var inputTextarea = document.getElementsByClassName('es5-input')[0];
var outputTextarea = document.getElementsByClassName('es6-input')[0];

	console.log("init called");
	Editor.create(inputTextarea);
	Editor.create(outputTextarea);

	
}



})();

















