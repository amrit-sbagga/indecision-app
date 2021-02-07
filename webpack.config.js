//entry -> output

const path = require('path')
//console.log(path.join(__dirname, 'public'));

module.exports = {
    entry : './src/app.js',
    output : {
        path: path.join(__dirname, 'public'),
        filename : 'bundle.js'
    },
    module: {
        rules : [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test : /\.scss$/,
                use :[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devtool : 'cheap-module-source-map',
    mode:'development',
    devServer : {
        contentBase : path.join(__dirname, 'public') 
    }
};

//check webpack docs available at https://webpack.js.org/configuration 
//loader
//webpack.js.org/configuration/dev-server
