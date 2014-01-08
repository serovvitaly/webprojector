DashboardBaseLayout = Marionette.Layout.extend({
    el: '#dashboard-application-layout',
    template: 'base-layout.tpl',
    regions: {
    	topSidebar:  '#dashboard-top-sidebar',
        baseSidebar: '#dashboard-base-sidebar',
        context:     '#dashboard-context'
    }
});