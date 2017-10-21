var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry : {
        app : './app.js'
    },
    output : {
        path : path.resolve(__dirname, '../dist'),
        filename : 'bundle.app.js',
        chunkFilename : 'chunk.[id].js'
    },
    module : {
        rules : [
            {test : /\.js$ /, loader : 'babel-loader', exclude : / node_modules / }
        ]
    },
    node : {
        fs : "empty",
        net: 'empty'
    }
}