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
        return this.slice(0, ind) + ' ' + data + ' ' + this.slice(ind + 1);
    }
    var $ = jQuery;
    //Form table data
    var form = {}, win = {};

    if(document.querySelector('#gsft_main')){
        win = document.querySelector('#gsft_main').contentWindow;
    }
    else{
        win = window;
    }

    if(win.g_form){
       showMailButton();        
    }

    my_functions = {

        incident_formMessage: function(){

            /*var gf = new win.GlideRecord(win.g_form.tableName);
            gf.get(win.g_form.getUniqueValue());*/

            var caller_id = win.g_form.getValue('sys_display.incident.caller_id');
            var opened_by = win.g_form.getValue('sys_display.incident.opened_by');
            var ticket_number = win.g_form.getValue('number');
            var follow_up = win.g_form.getValue('u_sub_pending_reason');
            var short_decription = win.g_form.getValue('short_description');
            if(short_decription.search("::")>-1){
                short_decription = short_decription.append(short_decription.match(/mango/i)[0].length, ticket_number);
            } 
            else
                short_decription = "Regarding ManGo ticket " + ticket_number;

            var description = win.g_form.getValue('comments');

            return encodeURI(caller_id + ';?cc=MDA_ManGo-Support;' + opened_by + ';&subject='+ [(follow_up.search(/Follow/)>-1) ? ('Reminder ' + follow_up[follow_up.length - 1] + ' :: ') : ''] + short_decription + '&body=' + description);
        },

        sc_task_formMessage: function(){

            // var gf = new GlideRecord(form.tableName);
            // gf.get(form.getUniqueValue());

            var caller_id = win.g_form.getValue('sys_display.sc_task.request_item.u_affected_user');
            var opened_by = win.g_form.getValue('sys_display.sc_task.request_item.opened_by');
            var ticket_number = win.g_form.getValue('sys_display.sc_task.request_item');
            var follow_up = win.g_form.getValue('u_sub_pending_reason');
            var short_decription = win.g_form.getValue('short_description');
            if(short_decription.search("::")>-1){
                short_decription = short_decription.append(short_decription.match(/mango/i)[0].length, ticket_number);
            } 
            else
                short_decription = "Regarding ManGo ticket " + ticket_number;

            var description = win.g_form.getValue('comments');

            return encodeURI(caller_id + ';?cc=MDA_ManGo-Support;' + opened_by + ';&subject='+ [(follow_up.search(/Follow/)>-1) ? ('Reminder ' + follow_up[follow_up.length - 1] + ' :: ') : ''] + short_decription + '&body=' + description);
        }
    }

    function showMailButton(){
        console.log('**************showing_mail_button')

        $('body').append('<div class="my-ext-menu">\n\
                <a href="#" class="send-mail"></a>\n\
            </div>');

        $('.send-mail').click(function (e) { 
            messageFun = win.g_form.tableName + '_formMessage';
            $('.send-mail').attr("href", 'mailto:' + my_functions[messageFun]());
        }); 
    }
})();