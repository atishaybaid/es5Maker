
import Editor from "./editor.js";
import Compiler from "./compiler.js";
/*import LocalStorage from "./localStorage.js";*/


var inputEditor;
var outputEditor;
var localStorage;


(function(){


document.addEventListener('DOMContentLoaded',init)




function init(){
var inputTextarea = document.getElementsByClassName('es5-input')[0];
var outputTextarea = document.getElementsByClassName('es6-input')[0];

	getLocalStorageData();

	 [inputEditor,outputEditor] = Editor.create(inputTextarea,outputTextarea);
	
	inputEditor.on("change",transform);
	
	
}

function transform(item,changeObj){
	
	let compiler = new Compiler (window.Babel);
	let [output,error] = compiler.compile(inputEditor.getValue());;
	outputEditor.setValue(output);
	window.localStorage.setItem("es5Code",inputEditor.getValue());
}


function getLocalStorageData(){
	var localStorageData = window.localStorage.getItem('es5Code');
	if(localStorageData){
		inputEditor.setValue(localStorageData);
	}

}


})();

















