const path = require('path')
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
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test:/\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }]
        },
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase:path.join(__dirname, 'public/')
        }
    };
};



//loader