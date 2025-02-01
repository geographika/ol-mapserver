const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');
const olVersion = pkg.dependencies.ol;

const rootPath = path.resolve(__dirname, ''); // Define rootPath

module.exports = [
    {
        name: 'OpenLayers',
        entry: path.join(rootPath, 'ol.mjs'),
        devtool: 'source-map',
        mode: 'production',
        performance: {
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000,
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: `ol-mapserver-${olVersion}.js`,
            library: 'ol',
            libraryTarget: 'umd',
            libraryExport: 'default',
        },
        plugins: [
            new webpack.BannerPlugin({
                banner: 'OpenLayers (https://openlayers.org/)\nCopyright 2005-present, OpenLayers Contributors All rights reserved.\nLicensed under BSD 2-Clause License (https://github.com/openlayers/openlayers/blob/main/LICENSE.md)',
            }),
        ],
        optimization: {
            minimize: true,
        }
    }
];