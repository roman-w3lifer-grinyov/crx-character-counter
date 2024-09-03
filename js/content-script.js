
/* global chrome */

chrome.runtime.sendMessage(''); // To reset badge after page reload

document.addEventListener('selectionchange', _ => chrome.runtime.sendMessage(document.getSelection().toString()))

document.addEventListener('visibilitychange', _ => {
  document.getSelection().empty()
  const googleTranslateExtension = document.getElementById('gtx-trans')
  if (googleTranslateExtension) {
    document.getElementById('gtx-trans').remove()
  }
})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.method === 'getSelection') {
    sendResponse({selectedText: document.getSelection().toString()})
  }
})
