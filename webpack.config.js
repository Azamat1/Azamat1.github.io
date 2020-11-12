const path = require('path');

module.exports = {
    mode: 'development',
	entry: './src/js/main.js',
	output: {
		filename: 'main.js',
        path: path.resolve(__dirname, '/dist'),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 3000,
        watchContentBase: true,
        progress: true
      },
}