export default class Compiler{
	constructor(compiler){
		this.compiler = compiler || window.babel;
		this.output;
		this.errors;
	}
	compile(inputCode){
		try{
			this.output = this.compiler.transform(inputCode, { presets: ['es2015'] }).code;
			console.log(this.output);


		} catch(error){
			console.log(error)
			this.errors = error;
		}

		return [this.output,this.errors];

	}


}
