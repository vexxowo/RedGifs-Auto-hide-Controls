# RedGifs Embed Auto-hide Controls

A userscript that automatically hides RedGifs embed player controls and the cursor when the mouse is idle, restoring them on movement.
---

## Features

- Hides player controls after a configurable period of mouse inactivity
- Hides the cursor when controls are hidden
- Smoothly fades controls in and out on mouse movement

---

## Installation

1. **Install a userscript manager:**
   - [Violentmonkey](https://violentmonkey.github.io/) (recommended)
   - [Tampermonkey](https://www.tampermonkey.net/)

2. **Click to install:**

   [![Install Userscript](https://img.shields.io/badge/Install-Userscript-success?style=for-the-badge)](https://raw.githubusercontent.com/vexxowo/RedGifs-Auto-hide-Controls/main/redgifs-auto-hide-controls.user.js)

3. **Confirm Installation:**
   - Your browser extension will open a new tab. Click **Install** to finish.

---

## Configuration

At the top of the script, adjust `HIDE_DELAY` to control how long (in milliseconds) the controls stay visible after the last mouse movement before hiding again:

```js
const HIDE_DELAY = 2000; // 2 seconds
```

---

## Recommended scripts

- [Redgifs Embed Tweaks (RET)](https://greasyfork.org/en/scripts/480214-redgifs-embed-tweaks-ret)

---

## License

MIT — do whatever you want with it.
