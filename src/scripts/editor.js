import CodeMirror from 'codemirror';
import jsMode     from 'codemirror/mode/javascript/javascript';


var config = {
mode:{name:'javascript',json:true},
lineNumbers:true
}



function create(myTextArea){
	
	let myCodeMirror = CodeMirror.fromTextArea(myTextArea,config);
	console.log(myCodeMirror);
}


export default{
	create
}