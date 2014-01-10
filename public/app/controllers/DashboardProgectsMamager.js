// Контроллер : Менеджер проектов
DashboardProgectsMamager = Marionette.Controller.extend({

    //modalProjectAdd: new ModalProjectAdd(),
    
    showAddModal: function(){ 
    
        Dashboard.view('DashboardContext').$el.fadeOut(null, function(){
            Dashboard.view('DashboardContext2').$el.hide();
            Dashboard.layout.context.show( Dashboard.view('DashboardContext2') );
            Dashboard.view('DashboardContext2').$el.fadeIn();
        });
        
    }

});