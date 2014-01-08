/**
* Dashboard
* 
* @version 1.0.0
* @author Vitaly Serov <serovvitaly@gmail.com>
*/

function DashboardApp(){

    this.views = [
        'app/views/DashboardBaseLayout',
        'app/views/DashboardTopSidebar',
        'app/views/DashboardBaseSidebar',
        'app/views/DashboardContext'
    ];

    this.controllers = [
        'app/controllers/DashboardProgectsMamager'
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

            this.projectsManager = new DashboardProgectsMamager();

            builtLayout();
        });

        // Загрузка контроллеров
        require(self.controllers, function(){
            //
        });
    });

    this.app.start();
}