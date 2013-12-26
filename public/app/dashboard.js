/**
* Dashboard
* 
* @version 1.0.0
* @author Vitaly Serov <serovvitaly@gmail.com>
*/
function Dashboard(){
    
    this.ControllerProject = new ControllerProject({
        views: [
            new ViewProjects
        ]
    });
    
}
Dashboard.prototype.init = function(){
    //
}