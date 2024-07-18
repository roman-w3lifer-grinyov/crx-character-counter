;'use strict';

/* global chrome */

chrome.runtime.sendMessage(''); // To reset badge after page reload

document.addEventListener('selectionchange', () => chrome.runtime.sendMessage(document.getSelection().toString()));

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.method === 'getSelection') {
    sendResponse({selectedText: document.getSelection().toString()});
  }
});
