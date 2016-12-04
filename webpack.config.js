module.exports = {
    entry: "./src/scripts/index.js",
    output : {
      publicPath: '/dist/js/',
      path : __dirname,
      filename : 'bundle.js'
    },
    module: {
        loaders: [
                 {
                   test: /\.js$/,
                   exclude: /node_modules/,
                   loader: 'babel-loader',
                   query: {
                     presets: ['es2015'] 
                   }
                 }
             ]
    }
};