var CollectionProjects = Backbone.Collection.extend({
    model: ModelProject,
    store: 'project',
    url: function(){        
        return '/sync/' + this.__proto__.store;
    }
});