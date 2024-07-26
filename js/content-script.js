;'use strict';

/* global chrome */

chrome.runtime.sendMessage(''); // To reset badge after page reload

document.addEventListener('selectionchange', () => chrome.runtime.sendMessage(document.getSelection().toString()));

// document.addEventListener('visibilitychange', () => {
//   chrome.runtime.sendMessage('');
//   window.getSelection().empty();
// });

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.method === 'getSelection') {
    sendResponse({selectedText: document.getSelection().toString()});
  }
});
