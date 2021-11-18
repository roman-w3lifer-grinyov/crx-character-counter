;'use strict';

/* global chrome */

document.addEventListener('selectionchange', () => chrome.runtime.sendMessage(document.getSelection().toString()));

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.method === 'getSelection') {
    sendResponse({selectedText: document.getSelection().toString()});
  }
});
