const path = require('path');

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, '../js'),
    entry: './index.js',
    output: {
        filename: 'index.bundle.js',    
        path: path.resolve(__dirname, '../dist'),
    },
    module: {
        rules: [
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/   
            }
        ]
    }
}