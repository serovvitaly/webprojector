<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Laravel PHP Framework</title>
  <link rel="stylesheet" type="text/css" href="/packages/common/normalize.css">
  <link rel="stylesheet" type="text/css" href="/packages/semantic/packaged/css/semantic.min.css">
  
  <!--link rel="stylesheet" type="text/css" href="/packages/bootstrap/css/bootstrap.min.css"-->
  
  <style type="text/css">
    html, html input{
        font-family: "Open Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        font-family: Tahoma !important;
        font-size: 13px;
    }
    .ui.menu{
        border-radius: 0;
    }
    .ui.dimmer{
        background-color: rgba(0, 0, 0, 0.15);
    }
    .ui.modal{
        border: 1px solid #AEB1B6;
        border-radius: 0;
        box-shadow: 1px 1px 7px 0px rgba(0, 0, 0, 0.2);
    }
    .ui.input input {
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 0;
        font-size: 13px;
        font-family: arial !important;
        padding: 8px 0;
    }
  </style>
  
</head>
<body>

      <div class="ui inverted menu">
        <a class="item sidebarer"><i class="double angle right big icon" style="margin: -14px -4px -9px -2px"></i></a>
        <a class="item"><i class="home icon"></i> Главная</a>
        <div class="ui dropdown item">
          Проекты<i class="dropdown icon"></i>
          <div class="menu ui transition hidden">
            <a class="item modal-project-add">Новый проект</a>
            <a class="item">Список проектов</a>
          </div>
        </div>
        <a class="item"><i class="user icon"></i> Задачи</a>

        <div class="right menu" style="margin-right: 10px;">
            <div class="ui top right pointing dropdown item">
              <i class="user icon"></i>
              <div class="menu ui transition hidden">
                <a class="item">Настройки профиля</a>
                <a class="item">Russian</a>
                <a class="item">Выход</a>
              </div>
            </div>
        </div>

      </div>
 
  
  <div class="ui left sidebar vertical inverted menu" id="dashboard-base-sidebar">
      
      <div style="height: 50px;"></div>
      
  <a class="active item">
    <div class="ui teal label">1</div>
    Inbox
  </a>
  <a class="item">
    <div class="ui label">51</div>
    Spam
  </a>
  <a class="item">
    <div class="ui label">1</div>
    Updates
  </a>


      
      <div style="height: 50px;"></div>
      

          <a class="item">
            Site Title
          </a>
          <div class="item">
            <b>Grouped Section</b>
            <div class="menu">
              <a class="item">Subsection 1</a>
              <a class="active item">Subsection 1</a>
              <a class="item">Subsection 1</a>
            </div>
          </div>
          <div class="ui dropdown item">
            Dropdown <i class="dropdown icon"></i>
            <div class="menu">
              <div class="item">Choice 1</div>
              <div class="item">Choice 2</div>
              <div class="item">Choice 3</div>
            </div>
          </div>

      
      <div style="height: 50px;"></div>
  
      <div class="header item">
        <i class="user icon"></i>
        Проекты
      </div>
      <div class="projects-list-menu"></div> 
      
  </div>
  
  <div id="dashboard-context">
      <!-- context -->
  </div>
  
  <div class="ui small modal" id="modal-project-add">
      <i class="close icon"></i>
      <div class="content">
        <div class="field">
            <div class="ui left labeled icon input" style="width: 100%;">
              <input type="text" placeholder="Введите название проекта">
              <i class="user icon"></i>
              <div class="ui corner label">
                <i class="icon asterisk"></i>
              </div>
            </div>
          </div>
      </div>
      <div class="actions">
        <div class="ui positive small button">Сохранить</div>
        <div class="ui negative small button">Отмена</div>
      </div>
    </div>
  
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
  <script src="/packages/common/json2.js"></script>
  <script src="/packages/semantic/packaged/javascript/semantic.min.js"></script>
  
  
  <script src="/packages/handlebarsjs/handlebars-v1.2.0.js"></script>
  <script src="/packages/backbone/underscore-min.js"></script>
  <script src="/packages/backbone/backbone.js"></script>
  

  <!-- models -->
  @foreach ($models as $model)
  <script src="/app/models/{{ $model }}"></script>  
  @endforeach
  
  <!-- collections -->
  @foreach ($collections as $collection)
  <script src="/app/collections/{{ $collection }}"></script>  
  @endforeach
  
  <!-- templates -->
  @include ('dashboard.templates.projects.item-1')
  
  
  <!-- views -->
  @foreach ($views as $view)
  <script src="/app/views/{{ $view }}"></script>  
  @endforeach
  
  <!-- controllers -->
  @foreach ($controllers as $controller)
  <script src="/app/controllers/{{ $controller }}"></script>  
  @endforeach
  
  <script src="/app/dashboard.js?foo=<?= rand(1000, 9999) ?>"></script>
  
  <script>
  
  console.group = undefined;
  console.table = undefined;
  
  var Dashboard = new Dashboard;
  
  $('#dashboard-base-sidebar')
      .sidebar({overlay: false})
      .sidebar('toggle')
      .sidebar('attach events', '.sidebarer');
      
  $('.ui.dropdown').dropdown();
  
  //$('#modal-project-add').modal('setting', 'transition', 'fade down').modal('attach events', '.modal-project-add', 'show');
  
  $('#modal-project-add')
      .modal('setting', 'transition', 'fade down')
      .modal('setting', {
              closable  : false,
              onDeny    : function(){
                  //TODO: CLEAR-FORM
              },
              onApprove : function() {
                  Dashboard.ControllerProject.add({
                      title: $('#modal-project-add input').val()
                  });
                  $('#modal-project-add input').val('');
                  //return false;
              }
          })
      .modal('attach events', '.modal-project-add', 'show')
    ;
      
  </script>
  
</body>
</html>