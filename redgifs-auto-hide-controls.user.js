// ==UserScript==
// @name         RedGifs Auto-hide Controls
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  A userscript that automatically hides RedGifs player controls and the cursor when the mouse is idle, restoring them on movement.
// @author       vexxowo
// @icon         https://www.google.com/s2/favicons?sz=64&domain=redgifs.com
// @match        https://www.redgifs.com/*
// @match        https://redgifs.com/*
// @license      MIT
// @updateURL    https://raw.githubusercontent.com/vexxowo/RedGifs-Auto-hide-Controls/main/redgifs-auto-hide-controls.user.js
// @downloadURL  https://raw.githubusercontent.com/vexxowo/RedGifs-Auto-hide-Controls/main/redgifs-auto-hide-controls.user.js
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
  'use strict';

  const HIDE_DELAY = 2000; // ms of stillness before hiding

  const style = document.createElement('style');
  style.textContent = `
	.logo,
	.playerBottom,
	.download-svg,
    .sidebar {
      opacity: 0 !important;
      transition: opacity 0.3s ease !important;
      pointer-events: none !important;
    }
	body.rgf-active .logo,
	body.rgf-active .playerBottom,
	body.rgf-active .download-svg,
    body.rgf-active .sidebar {
      opacity: 1 !important;
      pointer-events: auto !important;
    }
    body:not(.rgf-active) {
      cursor: none !important;
    }
  `;
  document.head.appendChild(style);

  let timer;

  document.addEventListener('mousemove', () => {
    document.body.classList.add('rgf-active');
    clearTimeout(timer);
    timer = setTimeout(() => {
      document.body.classList.remove('rgf-active');
    }, HIDE_DELAY);
  });
})();
