;'use strict';

/* global chrome */

window.addEventListener('DOMContentLoaded', () => {
  // https://coderedirect.com/questions/261024/button-in-popup-that-get-selected-text-chrome-extension
  chrome.tabs.query({currentWindow: true, active: true}, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, {'method': 'getSelection'}, response => {
      // https://stackoverflow.com/a/69587523/4223982
      const selectedText = (chrome.runtime.lastError || !response) ? '' :  response.selectedText;

      const fieldSelectedText = document.getElementById('field-selected-text');
      const fieldCharacters = document.getElementById('field-characters');
      const fieldWords = document.getElementById('field-words');
      const fieldSpaces = document.getElementById('field-spaces');
      const fieldCharactersWithoutSpaces = document.getElementById('field-characters-without-spaces');

      fieldSelectedText.addEventListener('input', event => countEntitiesAndSetValues(event.target.value));

      countEntitiesAndSetValues(selectedText);

      function countEntitiesAndSetValues(selectedText)
      {
        fieldSelectedText.value = selectedText;

        fieldCharacters.textContent = '' + selectedText.length;

        let numberOfWords = 0;
        if (selectedText.trim().length) {
          numberOfWords = selectedText.split(/\s+/g).filter(word => word.length);
          numberOfWords = numberOfWords.length;
        }
        fieldWords.textContent = '' + numberOfWords;

        let numberOfSpaces = selectedText.match(/\s/g);
        numberOfSpaces = numberOfSpaces ? numberOfSpaces.length : 0;
        fieldSpaces.textContent = '' + numberOfSpaces;

        fieldCharactersWithoutSpaces.textContent = '' + (selectedText.length - numberOfSpaces);
      }
    });
  });
});
