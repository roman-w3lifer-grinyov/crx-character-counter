;'use strict';

/* global chrome */

chrome.runtime.onMessage.addListener(selectedText => {
  chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
      id: '1',
      title: 'Chars: ' + selectedText.length,
      contexts: ['selection'],
    });
    let numberOfWords = 0;
    if (selectedText.trim().length) {
      numberOfWords = selectedText.split(/\s+/g).filter(word => word.length);
      numberOfWords = numberOfWords.length;
    }
    chrome.contextMenus.create({
      id: '2',
      title: 'Words: ' + numberOfWords,
      contexts: ['selection'],
    });
    let numberOfSpaces = selectedText.match(/\s/g);
    numberOfSpaces = numberOfSpaces ? numberOfSpaces.length : 0;
    chrome.contextMenus.create({
      id: '3',
      title: 'Spaces: ' + numberOfSpaces,
      contexts: ['selection'],
    });
  });
});
