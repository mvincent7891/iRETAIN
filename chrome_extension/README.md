
<a name="top_of_page"></a>

[![Logo][logo_image]][live_app]
[logo_image]: ./assets/favicon128.png

## iRetain Chrome Extension
Create flashcards from anywhere on the web

[Find iRetain in the Chrome Web Store][live_ext]
[live_ext]: https://chrome.google.com/webstore/detail/iretain/gbeamkiokdfmamlmmkhddfdpbmbgmkic?utm_source=gmail
[Create your iRetain Account][live_app]
[live_app]: http://www.iretain.io

The iRetain Chrome Extension interfaces with iRetain, a full-stack web app for creating and studying topical flashcards, inspired by Brainscape.

## Motivation
iRetain was originally conceptualized as a tool for enhancing the browsing experience for students and strengthening retention of new ideas. This is accomplished primarily through the iRetain Chrome Extension. The extension allows the user to look up words or concepts from anywhere on the web. Simply highlight a word, right click, select `Retain It`, and the definition will populate a notification in the corner of the screen. Meanwhile, the iRetain web app creates a flashcard in the background. This enables the user to come back to words or concepts he or she has looked up in the past, without the hassle of creating flashcards manually.

![ExDemo][ex_demo]
[ex_demo]: ./assets/ex_demo.gif
iRetain Chrome Extension Demo

## Overview
The extension is simple to use. After it is added to Chrome and enabled, simply highlight a word as shown below.

![Demo1][demo_1]
[demo_1]: ./assets/demo_1.png

Next, right click the word and select `Retain It` from the context menu that appears.

![Demo2][demo_2]
[demo_2]: ./assets/demo_2.png

After clicking, `Retain It`, the extension will send the selected word or concept to the iRetain web app, where a flashcard will be dynamically created with an auto-filled body. That auto-filled body will appear in a Chrome notification as shown below.

![Demo3][demo_3]
[demo_3]: ./assets/demo_3.png

Head over to your iRetain account and visit the `Default` deck under `General Knowledge` to see the newly created flashcard.

![Demo4][demo_4]
[demo_4]: ./assets/demo_4.png

## Technical Highlights
The iRetain web app's backend handles most of the heavy lifting, allowing the extension to be extremely lean. Future releases will need to handle highlighting of synonyms and previously looked up words on the current page, but the primary logic is currently handled here:

```javascript
const retainIt = word => {
  var query = word.selectionText;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        const res = JSON.parse(xhr.responseText);
        if ( res.error ) {
          const notification = new Notification('Oops!', {
            icon: './assets/favicon.ico',
            body: `Login to iRetain first!`
          });
        } else {
          const entry = res.title;
          const body = res.body;
          const notification = new Notification('iRetain created flashcard!', {
            icon: './assets/favicon.ico',
            body: `${entry}: ${body}`
          });
        }
    }
  };
  xhr.open('POST', `http://${path}/api/cards/extension?word=` + query, false);
  xhr.send();
};
```

## Future Directions

### Syntax Highlighting
The Chrome extension is intended for use by students who may be studying for standardized tests. In future releases, syntax highlighting will enable an enhanced, educational browsing experience. When enabled, words the user has looked up in the past will be highlighted on the page. Hovering over a previously looked up word will display it's definition.

In addition, synonyms of previously looked up words will be highlighted. Hovering over a synonym will reveal the originally looked up word. This feature will help strengthen retention by creating new associations with old concepts and words.
