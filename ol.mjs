// .mjs file is a JavaScript module file that uses ECMAScript Modules (ESM).

import { Map, View } from 'ol';
import { getCenter } from 'ol/extent.js';
import Image from 'ol/layer/Image.js';
import ImageSource from 'ol/source/Image.js';
import { addProjection, get, Projection } from 'ol/proj.js';
import { createLoader as createCgiLoader } from 'ol/source/mapserver.js';
import { createLoader as createWmsLoader } from 'ol/source/wms.js';

const ol = {
    extent: {
        getCenter
    },
    layer: {
        Image
    },
    proj: {
        addProjection,
        get,
        Projection
    },
    source: {
        Image: ImageSource,

        mapserver: {
            createLoader: createCgiLoader
        },
        wms: {
            createLoader: createWmsLoader
        }
    },
    Map, View
};

export default ol;