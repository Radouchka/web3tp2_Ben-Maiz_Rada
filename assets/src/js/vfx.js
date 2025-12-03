import { VFX } from "vfx-js";

document.addEventListener("DOMContentLoaded", () => {

  // initialise le moteur VFX
  const vfx = new VFX({
    autoRun: true,
    overflow: 200
  });

  // sélectionne l’élément
  const el = document.querySelector("#weapon-vfx");

  // applique l’effet glitch vert
  vfx.add(el, {
    shader: "glitch",
    seed: 2,
    size: 1.2,
    color: "#00ff33",      // 💚 vert
    intensity: 1.5,
    overflow: 150
  });

});
