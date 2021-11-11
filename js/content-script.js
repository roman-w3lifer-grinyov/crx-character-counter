;'use strict';

/* global chrome */

document.addEventListener('mouseup', () => {
  const selectedText = window.getSelection().toString();
  if (selectedText.length) {
    chrome.runtime.sendMessage(selectedText);
  }
});
