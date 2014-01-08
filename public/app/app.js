var Dashboard;

var requireds = [
    'packages/handlebarsjs/handlebars-v1.2.0',
    'packages/backbone/underscore-min',
    'packages/backbone/backbone-min',
    'packages/marionette/lib/backbone.marionette',
    'app/dashboard.js'
];

require(requireds, function(){
    
    // Динамическая загрузка шаблонов
    Backbone.Marionette.TemplateCache.prototype.loadTemplate = function(templateId){
        var ctn = $.ajax('/app/templates/' + templateId, {type: 'GET', async: false, dataType: 'html'});
        return ctn.responseText;
    }
    
    // Переопределение внутреннего шаблонизатора
    Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
        return Handlebars.compile(rawTemplate);
    };

    // Контроллер : Менеджер проектов
    DashboardProgectsMamager = Marionette.Controller.extend({

        modalProjectAdd: new ModalProjectAdd(),
        
        showAddModal: function(){
            console.log('DashboardProgectsMamager', 'showAddModal');

            console.log( this.modalProjectAdd.render() );
        }

    });

    

    Dashboard = new DashboardApp();

});