;'use strict';

/* global chrome */

chrome.runtime.onMessage.addListener(selectedText => {
  chrome.contextMenus.removeAll(() => {
    let title = selectedText.trim();
    title = title.split(/\s+/).length + ' Words - ' + title.length + ' Characters';
    chrome.contextMenus.create({
      id: '1',
      title: title,
      contexts: ['selection'],
    });
  });
});
