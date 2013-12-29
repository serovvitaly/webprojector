/**
* Dashboard
* 
* @version 1.0.0
* @author Vitaly Serov <serovvitaly@gmail.com>
*/

var requireds = [
    'packages/backbone/underscore-min',
    'packages/backbone/backbone',
    'packages/marionette/lib/backbone.marionette'
];

require(requireds, function(){
    
    DashboardTopSidebar = Marionette.ItemView.extend({
        template: '#tpl-dashboard-top-sidebar'
    });

    DashboardBaseLayout = Marionette.Layout.extend({
        el: 'body',
        template: '#tpl-base-layout',
        regions: {
            topSidebar:  '#dashboard-top-sidebar',
            baseSidebar: '#dashboard-base-sidebar',
            context:     '#dashboard-context'
        }
    });

    Dashboard = new Marionette.Application();

    Dashboard.addInitializer(function(){
        
        this.layout = new DashboardBaseLayout();
        this.layout.render();
        
        //this.layout.topSidebar.show( new DashboardTopSidebar() );
        
        this.w = new DashboardTopSidebar();
        this.w.render();
        
        
        
        //builtLayout();
    });

    Dashboard.start(); 
});