
import Editor from "./editor.js";
import Compiler from "./compiler.js";


var inputEditor;
var outputEditor;
var localStorage;


(function(){


document.addEventListener('DOMContentLoaded',init)
/*window.addEventListener('error', function (e) {
	console.log("error handler called");
    var error = e.error;
    console.log(error);
});*/

window.onerror = function(msg, url, line, col, error) {
	console.log(msg);
   // Note that col & error are new to the HTML 5 spec and may not be 
   // supported in every browser.  It worked for me in Chrome.
   //var extra = !col ? '' : '\ncolumn: ' + col;
   //extra += !error ? '' : '\nerror: ' + error;

   // You can view the information in an alert to see things working like this:
   //alert("Error: " + msg + "\nurl: " + url + "\nline: " + line + extra);

   // TODO: Report this error via ajax so you can keep track
   //       of what pages have JS issues

   var suppressErrorAlert = true;
   // If you return true, then error alerts (like in older versions of 
   // Internet Explorer) will be suppressed.
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

















