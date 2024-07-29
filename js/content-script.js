;'use strict';

/* global chrome */

chrome.runtime.sendMessage(''); // To reset badge after page reload

document.addEventListener('selectionchange', () => chrome.runtime.sendMessage(document.getSelection().toString()));

document.addEventListener('visibilitychange', () => {
  document.getSelection().empty();
  document.getElementById('gtx-trans').remove();
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.method === 'getSelection') {
    sendResponse({selectedText: document.getSelection().toString()});
  }
});
