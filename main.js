import './style.css';

import Map from 'ol/Map.js';
import View from 'ol/View.js';
import { getCenter } from 'ol/extent.js';
import ImageLayer from 'ol/layer/Image.js';
import ImageSource from 'ol/source/Image.js';
import { addProjection, Projection } from 'ol/proj.js';
import { createLoader as createCgiLoader } from 'ol/source/mapserver.js';
import { createLoader as createWmsLoader } from 'ol/source/wms.js';

// add a sample projection code not included by default in ol
if (!ol.proj.get('EPSG:32633')) {
    addProjection(new Projection({ code: 'EPSG:32633' }));
}

const mapserverUrl = 'https://demo.mapserver.org/cgi-bin/wms?';
const bounds = [-90,-180,90,180];
const cgiLayer = new ImageLayer({
  extent: bounds,
  source: new ImageSource({
    loader: createCgiLoader({
      url: mapserverUrl,
      params: {
        'layers': 'bluemarble',
      },
    }),
  }),
});

const wmsLayer = new ImageLayer({
  source: new ImageSource({
    loader: createWmsLoader({
      url: mapserverUrl,
      params: {
        LAYERS: ["country_bounds,cities"],
        VERSION: '1.3.0',
        FORMAT: 'image/png',
      },
      projection: 'EPSG:4326',
      ratio: 1, // default is 1.5
    }),
  }),
});

const map = new Map({
  layers: [cgiLayer, wmsLayer],
  target: 'map',
  view: new View({
    center: getCenter(bounds),
    zoom: 21,
  }),
});
