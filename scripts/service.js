(function e_updateZone(){
    var sc=angular.element('#timezone_picker_select').scope();
    if(sc.current != "IST"){
        sc.current = "IST";
        sc.updateCurrent();
        console.log('done');
    }
})();