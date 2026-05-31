# RedGifs Auto-hide Controls

A userscript that automatically hides RedGifs player controls and the cursor when the mouse is idle, restoring them on movement. Works only where RedGifs is embedded.

---

## Features

- Hides player controls after a configurable period of mouse inactivity
- Hides the cursor when controls are hidden
- Smoothly fades controls in and out on mouse movement
- Applies inside Reddit embeds

---

## Installation

1. **Install a userscript manager:**
   - [Violentmonkey](https://violentmonkey.github.io/) (recommended)
   - [Tampermonkey](https://www.tampermonkey.net/)

2. **Install the Script:**
   - **[Click here to install RedGifs-Auto-hide-Controls](https://github.com/vexxowo/RedGifs-Auto-hide-Controls/raw/refs/heads/main/redgifs-auto-hide-controls.user.js)**

3. **Confirm Installation:**
   - Your browser extension will open a new tab. Click **Install** to finish.

---

## Configuration

At the top of the script, adjust `HIDE_DELAY` to control how long (in milliseconds) the controls stay visible after the last mouse movement before hiding again:

```js
const HIDE_DELAY = 500; // 0.5 seconds
```

| Value | Behaviour |
|-------|-----------|
| `500` | Default - Hides quickly — snappier feel |
| `1000` | Balanced |
| `2000` | Hides slowly — more relaxed |

---

## Compatibility

| Platform | Supported |
|----------|-----------|
| redgifs.com (direct) | ❌ |
| Reddit (embedded) | ✅ |
| Firefox + Violentmonkey | ✅ |
| Firefox + Tampermonkey | ✅ |
| Chrome + Violentmonkey | ✅ |
| Chrome + Tampermonkey | ✅ |

---

## Recommended scripts

- [Redgifs Embed Tweaks (RET)](https://greasyfork.org/en/scripts/480214-redgifs-embed-tweaks-ret)
- [RedGifs AutoHD](https://github.com/Invertex/RedGifs-AutoHD)
- [REDgifs CPU% Saver](https://github.com/Raizuto/Tamper_Violentmonkey-Scripts/)

---

## License

MIT — do whatever you want with it.
