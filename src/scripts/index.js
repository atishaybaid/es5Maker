/*var input = 'const getMessage = () => "Hello World";';
var output = Babel.transform(input, { presets: ['es2015'] }).code;
console.log(output);
*/


import Editor from "./editor.js"

var inputEditor;
var outputEditor;

(function(){


document.addEventListener('DOMContentLoaded',init)




function init(){
var inputTextarea = document.getElementsByClassName('es5-input')[0];
var outputTextarea = document.getElementsByClassName('es6-input')[0];

	 [inputEditor,outputEditor] = Editor.create(inputTextarea,outputTextarea);
	
	inputEditor.on("change",transform);
	
}

function transform(item,changeObj){
	console.log(changeObj);
	console.log(item);
	console.log("transform called");
	console.log(inputEditor.getValue());

	var output = Babel.transform(inputEditor.getValue(), { presets: ['es2015'] }).code;
	console.log(output);


}


})();

















