chrome.webNavigation.onCompleted.addListener(function(o) {

    //chrome.tabs.sendMessage(o.tabId, {currentLoaded: true});

}, {url: [{urlMatches : 'https://fire.service-now.com/'}]});