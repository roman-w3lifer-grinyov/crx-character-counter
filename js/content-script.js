;'use strict';

/* global chrome */

document.addEventListener('mouseup', function () {
  const selectedText = window.getSelection().toString();
  if (selectedText.length) {
    chrome.runtime.sendMessage(selectedText);
  }
});
