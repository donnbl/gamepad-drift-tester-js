# gamepad-drift-tester-js

Lightweight, zero-dependency JavaScript helper for measuring **PS5 DualSense, Xbox Series X|S, and Nintendo Switch Pro controller stick drift** using the native browser [Web Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API).

👉 **Test your controller live in 5 seconds (no download):** [https://dprime.org/tests/gamepad-drift-test/](https://dprime.org/tests/gamepad-drift-test/)

## Why Circular Magnitude Matters
Checking `Math.abs(x)` and `Math.abs(y)` separately under-reports diagonal drift. Computing Euclidean magnitude `Math.hypot(x, y)` accurately detects radial deadzone drift across all 360 degrees.

```js
import { measureStickDrift, pollGamepadSnapshot } from './index.js';

const snap = pollGamepadSnapshot(0);
if (snap) {
  console.log('Left Stick:', snap.leftStick.driftPercent + '%', snap.leftStick.status);
  console.log('Right Stick:', snap.rightStick.driftPercent + '%', snap.rightStick.status);
}
```

## More Free Hardware & Utility Tools by Diamond Prime Ltd
- [PS5 / Xbox Gamepad Drift & Circularity Test](https://dprime.org/tests/gamepad-drift-test/)
- [Speaker Water Eject (165Hz) & Mic/Webcam Tester](https://dprime.org/tests/)
- [Zero-Upload Passport Photo 4x6 Studio](https://dprime.org/id-photo/)
- [Offline Android Apps on Google Play (MaxVol, Gradely, EVCharge, FocusLock)](https://play.google.com/store/apps/dev?id=7964762198016949638)

MIT License — Diamond Prime Ltd (https://dprime.org/)
