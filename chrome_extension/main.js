
const local_path = "localhost:3000";
const live_path = "www.iretain.io";
const path = live_path;

const retainIt = word => {
  var query = word.selectionText;
  var xhr = new XMLHttpRequest();
  console.log(path);
  xhr.open('POST', `http://${path}/api/cards/extension?word=` + query, false);
  xhr.send();
};

chrome.webRequest.onCompleted.addListener(function(details) {
  /* Process the XHR response */
  chrome.extension.getBackgroundPage().console.log(details);
  if (details.url == `http://${path}/session/new?error=MUST+LOGIN`) {
    chrome.tabs.create({url: s`http://${path}/session/new`});
  }
}, {urls: [`http://${path}/*`]});

chrome.contextMenus.create({
  title: "Retain It",
  contexts:["selection"],
  onclick: retainIt
});
