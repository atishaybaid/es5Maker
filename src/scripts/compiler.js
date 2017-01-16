export default class Compiler{
	constructor(compiler = window.babel){
		this.compiler = compiler;
		this.output;
		this.errors;
	}
	compile(inputCode){
		try{
			this.output = this.compiler.transform(inputCode, { presets: ['es2015'] }).code;

		} catch(error){

			this.errors = error;
		}

		return [this.output,this.errors];

	}

}
