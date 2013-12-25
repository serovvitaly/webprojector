Dashboard = Ember.Application.create();

Dashboard.ProjectController = Ember.Controller.extend({ 
    actions: {
        createProject: function(){
            
            var project = this.store.createRecord('prokat', {
                title: 'Первый проект',
                user: 'Foo Bar'
            });
            
        }
    } 
});

Dashboard.Router.map(function() {
  // put your routes here
});
