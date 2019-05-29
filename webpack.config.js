const path = require('path')
// entry -> output

module.exports = {
    mode: 'production',
    entry: './src/app.js',
    output:{
        path: path.join(__dirname, 'public/'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test:/\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase:path.join(__dirname, 'public/')
    }
}

//loader