// Центральная панель
DashboardContext2 = Marionette.ItemView.extend({
    template: 'dashboard-context.tpl',
    model: new Backbone.Model({
        title: 'Новый проект'
    })
});