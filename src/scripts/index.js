
import Editor from "./editor.js";
import Compiler from "./compiler.js";


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
	
	let compiler = new Compiler (window.Babel);
	let [output,error] = compiler.compile(inputEditor.getValue());
	outputEditor.setValue(output);
}


})();

















