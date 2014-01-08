// Верхнее меню
DashboardTopSidebar = Marionette.ItemView.extend({
    template: 'dashboard-top-sidebar.tpl',
    events: {
        'click .modal-project-add' : function(){
            Dashboard.projectsManager.showAddModal();
        }
    }
});