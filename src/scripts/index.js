
import Editor from "./editor.js";
import Compiler from "./compiler.js";


var inputEditor;
var outputEditor;
var localStorage;


(function(){


document.addEventListener('DOMContentLoaded',init)


window.onerror = function(msg, url, line, col, error) {
	console.log(msg);
   var suppressErrorAlert = true;

   return suppressErrorAlert;
};




function init(){
var inputTextarea = document.getElementsByClassName('es5-input')[0];
var outputTextarea = document.getElementsByClassName('es6-input')[0];

	 [inputEditor,outputEditor] = Editor.create(inputTextarea,outputTextarea);
	  inputEditor.on("change",transform);

	 getLocalStorageData(inputEditor);	
}

function transform(item,changeObj){
	
	let compiler = new Compiler (window.Babel);
	let [output,error] = compiler.compile(inputEditor.getValue());;
	outputEditor.setValue(output);
	window.localStorage.setItem("es5Code",inputEditor.getValue());
}


function getLocalStorageData(inputEditor){
	var localStorageData = window.localStorage.getItem('es5Code');
	if(localStorageData){
		inputEditor.setValue(localStorageData);
	}

}


})();

















