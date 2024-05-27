/* eslint-disable no-dupe-keys */
const { merge } = require('webpack-merge');
const path = require('path');
// eslint-disable-next-line import/extensions
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8037,
        open: true,
        compress: true,
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
        },
        compress: true,
    },
});
