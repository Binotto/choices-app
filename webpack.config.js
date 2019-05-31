const path = require('path');
const ExtractTextPlugin = require('mini-css-extract-plugin')
// entry -> output

module.exports = (env) => {
    const isProduction = env === 'production';
    return {
        mode: 'production',
        entry: './src/app.js',
        output:{
            path: path.join(__dirname, 'public/'),
            filename: 'bundle.js'
        },
        plugins:[
            new ExtractTextPlugin('styles.css'),
        ],
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test:/\.s?css$/,
                use: [{
                    loader: ExtractTextPlugin.loader,
                },
                'css-loader',
                'sass-loader',
            ],
            }]
        },
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase:path.join(__dirname, 'public/')
        }
    };
};



//loader