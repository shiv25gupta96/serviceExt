(function e_updateZone(){
    var sc=angular.element('#timezone_picker_select').scope();
    if(sc!==undefined && sc.current != "IST"){
        sc.current = "IST";
        sc.updateCurrent();
        console.log('done');
    }
})();

(function (){
    String.prototype.append = function(ind, data){
        return this.slice(0, ind) + ' ' + data + this.slice(ind + 1);
    }
    var $ = jQuery;
    //Form table data
    var form = window.g_form || (document.querySelector('#gsft_main') ? document.querySelector('#gsft_main').contentWindow.g_form : {});

    if(form){
       showMailButton();        
    }

    function incident_formMessage(){

        var gf = new GlideRecord(form.tableName);
        gf.get(form.getUniqueValue());

        var caller_id = $('#incident\\.caller_id_label').val();
        var opened_by = $('#incident\\.opened_by_label').val();
        var ticket_number = $('#sys_readonly\\.incident\\.number').val();
        var follow_up = $('#incident\\.u_sub_pending_reason').val();
        var short_decription = $('#incident\\.short_description').val();
        if(short_decription.search("::")>-1){
            short_decription = short_decription.append(short_decription.match(/mango/i)[0].length, ticket_number);
        } 
        else
            short_decription = "Regarding ManGo ticket " + ticket_number;
        var description = $('#activity-stream-comments-textarea').val();

        return encodeURI(caller_id + '?cc=MDA_ManGo-Support,' + opened_by + '&subject='+ [(follow_up.search(/Follow/)>-1) ? ('Reminder ' + follow_up[follow_up.length - 1] + ' :: ') : ''] + short_decription + '&body=' + description);
    }

    function sc_task_formMessage(){
        var caller_id = $('#incident\\.caller_id_label').val();
        var opened_by = $('#incident\\.opened_by_label').val();
        var ticket_number = $('#sys_readonly\\.incident\\.number').val();
        var follow_up = $('#incident\\.u_sub_pending_reason').val();
        var short_decription = $('#incident\\.short_description').val();
        if(short_decription.search("::")>-1){
            short_decription = short_decription.append(short_decription.match(/mango/i)[0].length, ticket_number);
        } 
        else
            short_decription = "Regarding ManGo ticket " + ticket_number;
        var description = $('#activity-stream-comments-textarea').val();

        return encodeURI(caller_id + '?cc=MDA_ManGo-Support,' + opened_by + '&subject='+ [(follow_up.search(/Follow/)>-1) ? ('Reminder ' + follow_up[follow_up.length - 1] + ' :: ') : ''] + short_decription + '&body=' + description);
    }

    function showMailButton(){

        $('body').append('<div class="my-ext-menu">\n\
                <a href="#" class="send-mail"></a>\n\
            </div>');

        $('.send-mail').click(function (e) { 
            messageFun = form.tableName + '_formMessage';
            $('.send-mail').attr("href", 'mailto:' + messageFun());
        }); 
    }
})();