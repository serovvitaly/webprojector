// Центральная панель
DashboardContext = Marionette.ItemView.extend({
    template: 'dashboard-context.tpl',
    title: 'goo-foo-bar',
    model: new Backbone.Model({
        title: 'остановись!'
    })
});