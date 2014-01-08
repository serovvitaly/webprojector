var Dashboard;

var requireds = [
    '/packages/handlebarsjs/handlebars-v1.2.0.js',
    '/packages/backbone/underscore-min.js',
    '/packages/backbone/backbone-min.js',
    '/packages/marionette/lib/backbone.marionette.js',
    '/app/dashboard.js?foo='+Math.random(1000,9999)
];

require.config({
    paths: {
        app: '/app',
        packages: '/packages'
    }
});

require(requireds, function(){
    
    // Динамическая загрузка шаблонов
    Backbone.Marionette.TemplateCache.prototype.loadTemplate = function(templateId){
        var ctn = $.ajax('/app/templates/' + templateId + '?foo=' +Math.random(1000,9999), {type: 'GET', async: false, dataType: 'html'});
        return ctn.responseText;
    }
    
    // Переопределение внутреннего шаблонизатора
    Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
        return Handlebars.compile(rawTemplate);
    };    

    Dashboard = new DashboardApp();

});