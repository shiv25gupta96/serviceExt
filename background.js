chrome.webNavigation.onCompleted.addListener(function(o) {

    chrome.tabs.executeScript({

        code: "console.log('done')"

    })

}, {url: [{urlMatches : 'https://fire.service-now.com/'}]});