# Custom OpenLayers Builds for MapServer

This repository contains a simple OpenLayers application that includes the JS used
for the OpenLayers templates in MaPServer.

To run:

    cd ol-mapserver
    npm start
    # http://localhost:5173

To generate a build:

    npm run build

This only uses the OpenLayers classes required by the application.

Then deploy the contents of the `dist` directory to your server.  You can also run `npm run serve` to serve the results of the `dist` directory for preview.

## Size Differences

//cdn.jsdelivr.net/npm/ol@v10.4.0/dist/ol.js - size 840 KB
//cdn.jsdelivr.net/npm/ol@v10.4.0/ol.css - size 6.2 KB

Custom builds

JS - 195 KB
CSS 6 KB

## Custom Builds

Many methods out-of-date e.g. https://openlayers.org/workshop/fr/custom-builds/create.html

See https://github.com/openlayers/openlayers/issues/15206
https://github.com/phpmyadmin/phpmyadmin/blob/3c21a0e0d20affcd39171dc09d993c03a59b9ece/js/src/ol.mjs

Run:

    npx webpack --config webpack.config.js