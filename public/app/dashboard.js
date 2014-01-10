/**
* Dashboard
* 
* @version 1.0.0
* @author Vitaly Serov <serovvitaly@gmail.com>
*/
function DashboardApp(){
    
    this.debug = true;

    this.views = [
        'DashboardBaseLayout',
        'DashboardTopSidebar',
        'DashboardBaseSidebar',
        'DashboardContext',
        'DashboardContext2',
        'ModalProjectAdd'
    ];

    this.controllers = [
        'DashboardProgectsMamager',
        'BaseRouteController',
    ];

    this.app = new Marionette.Application();    

    this.init();
}

DashboardApp.prototype.init = function(){

    var base = this;
    
    // Инициализация приложения
    this.app.addInitializer(function(){

        // Загрузка видов        
        base.loadViews(function(){
            
            base.layout = base.view('DashboardBaseLayout');
            base.layout.render();
             
            base.layout.topSidebar.show( base.view('DashboardTopSidebar') ); 
            base.layout.baseSidebar.show( base.view('DashboardBaseSidebar') );
            base.layout.context.show( base.view('DashboardContext') );
             
            base.view('DashboardBaseSidebar').render();
            
            builtLayout();
        });
        
        // Загрузка контроллеров
        base.loadControllers(function(){
            Backbone.history.start();
        });
        
        
    });

    this.app.start();
}

DashboardApp.prototype.loadViews = function(callback){
    var base = this;
    
    this.loadComponents(this.views, 'views/', function(){
        for (var i = 0; i < base.views.length; i++) {
            base.views[base.views[i]] = new window[base.views[i]]();
            delete(base.views[i]);
        }
        
        if (callback) callback();
    });
}

DashboardApp.prototype.loadControllers = function(callback){
    var base = this;
    
    this.loadComponents(this.controllers, 'controllers/', function(){
        for (var i = 0; i < base.controllers.length; i++) {
            base.controllers[base.controllers[i]] = new window[base.controllers[i]]();
            delete(base.controllers[i]);
        }
        
        if (callback) callback();
    });
}
/**
* Загружает компоненты приложение: контроллеры, виды, модели и т.д.
* 
* mix - списко имен компонентов
* prefix - путь к директории на сервере, с учетом require.config.paths
* callback - кэллбек после загрузки всех компонентов
*/
DashboardApp.prototype.loadComponents = function(mix, prefix, callback){
    var base = this;
    if (mix.length < 1) {
        if (base.debug) console.warn('List of components is empty!');
        return false;
    }
    var mixCollection = [], postfix = '';
    if (base.debug) {
        prefix = '/app/' + prefix;
        postfix = '.js?foo=' + Math.random();
    }
    for (var i = 0; i < mix.length; i++) {
        mixCollection.push(prefix + mix[i] + postfix);
    }
    //console.log(mixCollection);
    require(mixCollection, callback);
}

DashboardApp.prototype.view = function(name){
    if (!this.views[name]) throw new Error('View `' + name + '` is not defined!');
    return this.views[name];
}
DashboardApp.prototype.controller = function(name){
    if (!this.controllers[name]) throw new Error('Controller `' + name + '` is not defined!');
    return this.controllers[name];
}
/**
* Переключение регионов с применением эффекта
* 
* switchFrom - регион, который будет скрыт
* switchTo - регион, который будет показан
*/
DashboardApp.prototype.switchWiews = function(switchFrom, switchTo, effect){
    
    switchFrom.$el.fadeOut(null, function(){
        switchTo.$el.fadeIn();
    });
}