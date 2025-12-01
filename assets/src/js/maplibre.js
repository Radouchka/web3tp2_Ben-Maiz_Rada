import maplibregl from "https://esm.sh/maplibre-gl@5.13.0";

const carte = new maplibregl.Map({
  container: "carte",
  style: "https://tiles.openfreemap.org/styles/bright",
  center: [-73.8462195, 45.6125882], // Laval
  zoom: 9
});