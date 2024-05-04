const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode : 'development',
    devServer : {
        port : 3001,
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
            name : 'payments_add',
            filename : 'remoteEntry.js',
            shared : ['react', 'react-dom', 'css-loader', 'ts-loader'],
            exposes :
                {'./PaymentsAdd' : './src/PaymentsAdd/indexPaymentsAdd'}
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
