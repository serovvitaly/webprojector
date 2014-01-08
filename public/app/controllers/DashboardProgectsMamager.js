// Контроллер : Менеджер проектов
DashboardProgectsMamager = Marionette.Controller.extend({

    modalProjectAdd: new ModalProjectAdd(),
    
    showAddModal: function(){
        console.log('DashboardProgectsMamager', 'showAddModal');

        console.log( this.modalProjectAdd.render() );
    }

});