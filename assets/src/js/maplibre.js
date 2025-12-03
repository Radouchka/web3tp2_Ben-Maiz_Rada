import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const map = new maplibregl.Map({
  container: "carte",
  style: "https://api.maptiler.com/maps/toner-v2/style.json?key=vi9DtA1TL0Ga3okiln2O",
  center: [-73.56, 45.50], // Montreal
  zoom: 11
});