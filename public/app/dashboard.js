/**
* Dashboard
* 
* @version 1.0.0
* @author Vitaly Serov <serovvitaly@gmail.com>
*/

var requireds = [
    'packages/handlebarsjs/handlebars-v1.2.0',
    'packages/backbone/underscore-min',
    'packages/backbone/backbone',
    'packages/marionette/lib/backbone.marionette'
];

require(requireds, function(){
    
    // Динамическая загрузка шаблонов
    Backbone.Marionette.TemplateCache.prototype.loadTemplate = function(templateId){
        var ctn = $.ajax('/app/templates/'+templateId, {type: 'GET', async: false, dataType: 'html'});
        return ctn.responseText;
    }
    
    // Переопределение внутреннего шаблонизатора
    Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
        return Handlebars.compile(rawTemplate);
    };
    
    DashboardTopSidebar = Marionette.ItemView.extend({
        template: 'dashboard-top-sidebar.tpl'
    });
    
    DashboardBaseSidebar = Marionette.ItemView.extend({
        template: 'dashboard-base-sidebar.tpl'
    });
    
    DashboardContext = Marionette.ItemView.extend({
        template: 'dashboard-context.tpl'
    });

    DashboardBaseLayout = Marionette.Layout.extend({
        el: '#dashboard-application-layout',
        template: 'base-layout.tpl',
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
        
        this.layout.topSidebar.show( new DashboardTopSidebar() );        
        this.layout.baseSidebar.show( new DashboardBaseSidebar() );        
        this.layout.context.show( new DashboardContext() );        
        
        
        builtLayout();
    });

    Dashboard.start(); 
});