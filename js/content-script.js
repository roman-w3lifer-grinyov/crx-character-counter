;'use strict';

/* global chrome */

document.addEventListener('mouseup', () => chrome.runtime.sendMessage(document.getSelection().toString()));
