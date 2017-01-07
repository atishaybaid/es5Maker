export default class Compiler{
	constructor(compiler){
		console.log(compiler);
		this.compiler = compiler || window.babel;
		this.output;
		this.errors;
	}
	compile(inputCode){
		try{
			console.log(this.compiler);
			this.output = this.compiler.transform(inputCode, { presets: ['es2015'] }).code;
			console.log(this.output);


		} catch(error){
			console.log(error)
			this.errors = error;
		}

		return [this.output,this.errors];

	}


}
