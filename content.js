window.onload = () => {
    console.log("Document Loaded ");
    var scr = document.createElement("script");
    scr.src = chrome.runtime.getURL("scripts/service.js");
    var cStyle = document.createElement("link");
    cStyle.href = chrome.runtime.getURL("styles/c_style.css");
    cStyle.rel = "stylesheet";
    cStyle.type = "text/css";
    document.getElementsByTagName("head")[0].appendChild(cStyle);
    document.getElementsByTagName("body")[0].appendChild(scr);
}
/*usable icons: f17c, f1a3*/
/* document.onload = ()=>{
    var mButton = document.createElement("div");
    mButton.setAttribute('class', 'btn btn-icon sn-navhub-btn sn-tooltip-basic ng-scope send-mail');
    document.body.appendChild(mButton);
}

$=jQuery;
$('body').append('<div class="empty-box"></div>');
var ebox=$('.empty-box');

$('head').append('<style type="text/css" id="my-ow-style">\n\
    .empty-box {\n\
        position: absolute;\n\
        top: 0;\n\
        right: 0;\n\
        bottom: 0;\n\
        left: 0;\n\
        background: white;\n\
        color: black;\n\
        z-index: 100;\n\
        display: flex;\n\
        font-family: "retina_icons";\n\
        align-items: flex-start;\n\
        justify-content: space-evenly;\n\
    }\n\
    .m-icons {\n\
        height: 40px;\n\
        width: 40px;\n\
        background: #dedcdc;\n\
    }\n\
    span.m-icons:before {\n\
        position: relative;\n\
        display: flex;\n\
        align-items: center;\n\
        justify-content: center;\n\
        width: 100%;\n\
        height: 100%;\n\
        font-size: 20px;\n\
}\n</style>');

/*f100 to f227
for(var x=0xa000; x<=0xafff;x=x+0x1){
    ebox.append('<span class="m-icons '+x.toString(16)+'"></span>');
    $('head > #my-ow-style').append('.'+x.toString(16)+':before{\n\
        content: "\\'+x.toString(16)+'"\n\
    }\n');
} */