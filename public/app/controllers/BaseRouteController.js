// Контроллер : Роуты
BaseRouteController = Backbone.Router.extend({
    routes: {
        "": "start", // Пустой hash-тэг
        "!/": "start", // Начальная страница
        "projects": "projects", // Блок удачи
        "!/error": "error" // Блок ошибки
    },

    start: function () {
        //console.log('rr', 'start');
    },

    projects: function () {
        //console.log('rr', 'projects');
    },

    error: function () {
        //console.log('rr', 'error');
    }
});