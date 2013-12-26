/**
* ControllerProject
* 
* @version 1.0.0
* @author Vitaly Serov <serovvitaly@gmail.com>
*/
function ControllerProject(options){
    
    var self = this;
    
    _.extend(self, options);
    
    self.store = new CollectionProjects;

    
    self.store.on('add', function(rec){
        this.sync('create', rec);
    });
    
    self.store.on('change', function(rec){
        this.sync('update', rec);
    });
    
    _.each(self.views, function(item, index){
        item.listenTo(self.store, 'add', item.render);
        item.listenTo(self.store, 'change', item.render);
    });
    
}
ControllerProject.prototype.add = function(data){
    this.store.add(data);
}
ControllerProject.prototype.updateViews = function(){
    //this.store.add(data);
}