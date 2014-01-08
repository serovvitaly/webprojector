/**
* Dashboard
* 
* @version 1.0.0
* @author Vitaly Serov <serovvitaly@gmail.com>
*/

function DashboardApp(){

    this.views = [
        '/app/views/DashboardBaseLayout.js?foo='+Math.random(1000,9999),
        '/app/views/DashboardTopSidebar.js?foo='+Math.random(1000,9999),
        '/app/views/DashboardBaseSidebar.js?foo='+Math.random(1000,9999),
        '/app/views/DashboardContext.js?foo='+Math.random(1000,9999),
        '/app/views/modalProjectAdd.js?foo='+Math.random(1000,9999)
    ];

    this.controllers = [
        '/app/controllers/DashboardProgectsMamager.js?foo='+Math.random(1000,9999)
    ];

    this.app = new Marionette.Application();

    this.init();
}

DashboardApp.prototype.init = function(){

    var self = this;

    // Инициализация приложения
    this.app.addInitializer(function(){

        // Загрузка видов
        require(self.views, function(){
            this.layout = new DashboardBaseLayout();
            this.layout.render();
            
            this.layout.topSidebar.show( new DashboardTopSidebar() );        
            this.layout.baseSidebar.show( new DashboardBaseSidebar() );        
            this.layout.context.show( new DashboardContext() );

            builtLayout();
        });

        // Загрузка контроллеров
        require(self.controllers, function(){
            self.projectsManager = new DashboardProgectsMamager();
        });
    });

    this.app.start();
}