;'use strict';

/* global chrome */

chrome.runtime.onMessage.addListener(
  selectedText => chrome.action.setBadgeText({text: '' + (selectedText.length || '')})
);
