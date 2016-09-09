
const retainIt = word => {
  var query = word.selectionText;
  var xhr = new XMLHttpRequest();
  // console.log(query);
  xhr.open("POST", "http://localhost:3000/api/cards/extension?word=" + query, false);
  xhr.send();
};

chrome.webRequest.onCompleted.addListener(function(details) {
  /* Process the XHR response */
  chrome.extension.getBackgroundPage().console.log(details);
  if (details.url == "http://localhost:3000/session/new?error=MUST+LOGIN") {
    chrome.tabs.create({url: "http://localhost:3000/session/new"});
  }
}, {urls: ["http://localhost:3000/*"]});

chrome.contextMenus.create({
  title: "Retain It",
  contexts:["selection"],
  onclick: retainIt
});



// Define get definitions

// Define define and Retain

// Define and do not retain
