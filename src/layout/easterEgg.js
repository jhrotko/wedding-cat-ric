import confetti from "canvas-confetti";

var skew = 1;

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

export function makeItSnow() {
  skew = Math.max(0.8, skew - 0.001);

  confetti({
    particleCount: 1,
    startVelocity: 0,
    origin: {
      x: Math.random(),
      // since particles fall down, skew start toward the top
      y: Math.random() * skew - 0.2,
    },
    colors: ["#ff0044", "#ffd900"],
    gravity: randomInRange(0.4, 0.6),
    scalar: randomInRange(0.4, 1),
    drift: randomInRange(-0.4, 0.4),
  });
  requestAnimationFrame(makeItSnow);
}
