/**
* Dashboard
* 
* @version 1.0.0
* @author Vitaly Serov <serovvitaly@gmail.com>
*/
App = Ember.Application.create({
    //ready: function(){
        //console.log('Ember.Application', 'ready');
    //}
});

App.Router.map(function() {
    // put your routes here
});

App.ApplicationView = Ember.View.extend({
    didInsertElement : function(){
        Ember.run.schedule('afterRender',function(){
            builtLayout();
        });
    }
});