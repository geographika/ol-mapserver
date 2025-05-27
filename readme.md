# OpenLayers and MapServer

This repository serves two purposes:

1. A simple OpenLayers application that includes the JS used for the [MapServer OpenLayers Viewer](https://mapserver.org/cgi/openlayers.html).
2. A custom build process to create a smaller version of the OpenLayers library used by the viewer.

## Demo

To run:

    cd ol-mapserver
    npm start
    # http://localhost:5173

To generate a build:

    npm run build

This only uses the OpenLayers classes required by the application.
Then deploy the contents of the `dist` directory to your server.
You can also run `npm run serve` to serve the results of the `dist` directory for preview.

## Custom OpenLayers Build

This approach is based on the links in [this issue](https://github.com/openlayers/openlayers/issues/15206),
and the [files here](https://github.com/phpmyadmin/phpmyadmin/blob/3c21a0e0d20affcd39171dc09d993c03a59b9ece/js/src/ol.mjs).

Many other methods are out-of-date with new versions of OpenLayers (10+) e.g. https://openlayers.org/workshop/fr/custom-builds/create.html.

Add/remove and files as required in `ol.mjs`.

To build:

    npx webpack --config webpack.config.js

### Size Differences

- //cdn.jsdelivr.net/npm/ol@v10.4.0/dist/ol.js - size 840 KB
- //cdn.jsdelivr.net/npm/ol@v10.4.0/ol.css - size 6.2 KB
- `build/ol-mapserver-10.4.0.js` - size 195 KB
- `ol.css` - this is unchanged from the standard CSS file


