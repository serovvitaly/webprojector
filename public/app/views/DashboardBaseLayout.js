DashboardBaseLayout = Marionette.Layout.extend({
    el: '#dashboard-application-layout',
    template: 'base-layout.tpl',
    events: {
        'click [data-action="project.modaladd.show"]' : function(){
            Dashboard.projectsManager.showAddModal();
        }
    },
    regions: {
    	topSidebar:  '#dashboard-top-sidebar',
        baseSidebar: '#dashboard-base-sidebar',
        context:     '#dashboard-context'
    }
});