(function e_updateZone(){
    var sc=angular.element('#timezone_picker_select').scope();
    if(sc!==undefined && sc.current != "IST"){
        sc.current = "IST";
        sc.updateCurrent();
        console.log('done');
    }
})();

(function (){
    if(document.location.pathname == '/sc_task.do' || document.location.pathname == '/incident.do'){
        jQuery('body').append('<div class="my-ext-menu">\n\
                <a href="#" class="send-mail"></a>\n\
            </div>');
    }
})();