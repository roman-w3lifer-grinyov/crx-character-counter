;'use strict';

/* global chrome */

document.addEventListener('mouseup', () => {
  const selectedText = document.getSelection().toString();
  if (selectedText.length) {
    chrome.runtime.sendMessage(selectedText);
  }
});
