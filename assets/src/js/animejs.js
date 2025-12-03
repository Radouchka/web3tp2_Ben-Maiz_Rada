// Animate the map center over time
anime({
  targets: {},
  duration: 20000,          // 20 seconds
  easing: "linear",
  loop: true,
  update: function(anim) {
    // anim.progress goes from 0 to 100
    const t = anim.progress / 100;

    // Example path (circle)
    const lat = 52 + Math.sin(t * 2 * Math.PI) * 3;
    const lon = 10 + Math.cos(t * 2 * Math.PI) * 3;

    map.easeTo({
      center: [lon, lat],
      duration: 100,
      essential: true
    });
  }
});