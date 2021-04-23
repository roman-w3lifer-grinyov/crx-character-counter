;'use strict';

/* global chrome */

chrome.runtime.onMessage.addListener(function (selectedText) {
  chrome.contextMenus.removeAll(function () {
    let title = selectedText.trim();
    title = title.split(/\s+/).length + ' Words - ' + title.length + ' Characters';
    chrome.contextMenus.create({
      id: '1',
      title: title,
      contexts: ['selection']
    });
  });
});
