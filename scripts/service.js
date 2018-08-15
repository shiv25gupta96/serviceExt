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
        jQuery('.send-mail').click(function (e) { 
            jQuery('.send-mail').attr("href", 'mailto:'+formMessage());
        }); 
        
    }

    function formMessage(){
        var caller_id = jQuery('#incident\\.caller_id_label').val();
        var opened_by = jQuery('#incident\\.opened_by_label').val();
        var incident_number = jQuery('#sys_readonly\\.incident\\.number').val();
        var follow_up = jQuery('#incident\\.u_sub_pending_reason').val();
        var short_decription = jQuery('#incident\\.short_description').val();
        var description = jQuery('#activity-stream-comments-textarea').val();

        return encodeURI(caller_id + '?cc=MDA_Mango_Support,' + opened_by + '&subject=' + short_decription + '&body=' + description);
    }

    function showMailButton(){
        jQuery('.send-mail').click(function (e) { 
            jQuery('.send-mail').attr("href", 'mailto:'+formMessage());
        }); 
    }
})();