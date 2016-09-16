
const local_path = "localhost:3000";
const live_path = "www.iretain.io";
const path = live_path;

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

chrome.webRequest.onCompleted.addListener(function(details) {
  /* Process the XHR response */
  chrome.extension.getBackgroundPage().console.log(details);
  if (details.url == `http://${path}/session/new?error=MUST+LOGIN`) {
    chrome.tabs.create({url: `http://${path}/session/new`});
  }
}, {urls: [`http://${path}/*`]});

chrome.contextMenus.create({
  title: "Retain It",
  contexts:["selection"],
  onclick: retainIt
});
