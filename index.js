/**
 * gamepad-drift-tester-js — Zero-dependency Web Gamepad API stick drift analyzer
 * Live interactive PS5/Xbox controller tester: https://dprime.org/tests/gamepad-drift-test/
 * Built by Diamond Prime Ltd (https://dprime.org)
 */
export function measureStickDrift(axisX, axisY, deadzone = 0.05) {
  const magnitude = Math.hypot(axisX, axisY);
  const driftPercent = Number((magnitude * 100).toFixed(2));
  const angleDeg = Number(((Math.atan2(axisY, axisX) * 180) / Math.PI).toFixed(1));
  const status = magnitude > 0.12 ? 'severe-drift' : magnitude > deadzone ? 'mild-drift' : 'healthy';
  return { axisX, axisY, magnitude: Number(magnitude.toFixed(4)), driftPercent, angleDeg, status };
}

export function pollGamepadSnapshot(index = 0) {
  const pads = navigator.getGamepads ? navigator.getGamepads() : [];
  const gp = pads[index];
  if (!gp) return null;
  return {
    id: gp.id,
    leftStick: measureStickDrift(gp.axes[0] || 0, gp.axes[1] || 0),
    rightStick: measureStickDrift(gp.axes[2] || 0, gp.axes[3] || 0),
    pressedButtons: gp.buttons.map((b, i) => (b.pressed ? i : -1)).filter((i) => i >= 0)
  };
}
