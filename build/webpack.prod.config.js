var path = require('path');
var webpack = require('webpack');
const base = require('./webpack.base.config');

module.exports = Object.assign({}, base, {
    output : Object.assign({}, base.output, {
        filename : 'bundle.app.js',
        chunkFilename : 'chunk.[id].[hash].js'
    })
});