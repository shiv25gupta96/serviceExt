window.onload = () => {
    console.log("Document Loaded ");
    var scr = document.createElement("script");
    scr.src = chrome.runtime.getURL("scripts/service.js");
    document.getElementsByTagName("body")[0].appendChild(scr);
}
