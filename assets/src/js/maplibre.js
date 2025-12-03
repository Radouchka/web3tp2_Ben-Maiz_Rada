import maplibregl from "https://esm.sh/maplibre-gl@5.13.0";

const carte = new maplibregl.Map({
  container: "carte",
  style: "https://api.maptiler.com/maps/toner-v2/style.json?key=vi9DtA1TL0Ga3okiln2O",
  center: [10, 54],
  zoom: 3.2,
  attributionControl: false
});
carte.on("load", () => {
  // Background stays dark green
  carte.setPaintProperty("background", "background-color", "#003300");

  const layers = carte.getStyle().layers;

  for (const layer of layers) {
    // Any white-ish fill → black
    if (layer.type === "fill") {
      carte.setPaintProperty(layer.id, "fill-color", "#000000"); // black
    }

    // Green lines for outlines
    if (layer.type === "line") {
      carte.setPaintProperty(layer.id, "line-color", "#00ff00");
    }

    // Green icons + text
    if (layer.type === "symbol") {
      carte.setPaintProperty(layer.id, "text-color", "#00ff00");
      carte.setPaintProperty(layer.id, "icon-color", "#00ff00");
    }
  }
});
