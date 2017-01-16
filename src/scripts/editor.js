import CodeMirror from 'codemirror';
import jsMode     from 'codemirror/mode/javascript/javascript';


var config = {
mode:{name:'javascript',json:true},
lineNumbers:true
}



function create(inputTextArea,outputTextArea){
	
	let inputEditor = CodeMirror.fromTextArea(inputTextArea,config);
	let outputEditor = CodeMirror.fromTextArea(outputTextArea,config);

	return [inputEditor,outputEditor];
	

}


export default{
	create
}