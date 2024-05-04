const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode : 'development',
    devServer : {
        port : 3003,
        historyApiFallback : {
            index : '/index.html'
        },
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
plugins : [
        new HtmlWebpackPlugin({
            template : './index.html'
        }),
        new ModuleFederationPlugin({
            name : 'static_pages',
            filename : 'remoteEntry.js',
            exposes :
                {'./PageNotFound' : './src/PageNotFound/indexPageNotFound',
                './HomePage' : './src/HomePage/indexHomePage'},
                shared: ['react', 'react-dom', 'css-loader', 'ts-loader']   
        }
        )
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
};
