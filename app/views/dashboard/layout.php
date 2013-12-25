<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Laravel PHP Framework</title>
  <link rel="stylesheet" type="text/css" href="/packages/starter-kit-1.2.0/css/normalize.css">
  <link rel="stylesheet" type="text/css" href="/packages/semantic/packaged/css/semantic.min.css">
</head>
<body>
  <div class="ui fixed green inverted menu">
    <a class="active item"><i class="home icon"></i> Главная</a>
    <a class="item"><i class="mail icon"></i> Проекты</a>
    <a class="item sidebarer"><i class="user icon"></i> Задачи</a>
  </div>
  
  <div class="ui left sidebar vertical inverted menu" id="dashboard-base-sidebar">
  
  </div>
  
  <div id="dashboard-context" style="padding-top: 50px;">
  {{outlet}}
  </div>
  
  <script type="text/x-handlebars">
     HELLO
  </script>
  
  <script type="text/x-handlebars" data-template-name="say-hello">
  
  </script>
  
  <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
  <script src="/packages/semantic/packaged/javascript/semantic.min.js"></script>
  <!-- Ember -->
  <script src="/packages/starter-kit-1.2.0/js/libs/handlebars-1.1.2.js"></script>
  <script src="/packages/starter-kit-1.2.0/js/libs/ember-1.2.0.js"></script>
  
  <script src="/packages/app/dashboard.js?foo=<?= rand(1000, 9999) ?>"></script>
  
  <script>
  $('#dashboard-base-sidebar')
      .sidebar({overlay: false})
      .sidebar('toggle')
      .sidebar('attach events', '.sidebarer');
  </script>
  
</body>
</html>