var ViewProjects = Backbone.View.extend({
    el: $('.projects-list-menu'),
    template: Handlebars.compile($("#projects-item-1").html()),
    render: function(rec){       
        this.$el.html(this.$el.html() + this.template(rec.attributes));
        return this;
    }
});