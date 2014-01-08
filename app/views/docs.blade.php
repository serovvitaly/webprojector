<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" type="text/css" href="/packages/bootstrap2/css/bootstrap.min.css">
</head>
<body>
  <div class="container-fluid" style="margin-top: 20px">
    <div class="row-fluid">
      <div class="span3">
      	<ul class="nav nav-list bs-docs-sidenav affix">
      	  <li class="nav-header">Marionette</li>
      	  <?php

      	  $ref = Input::get('f');

      	  $MarionetteList = array(
              'marionette.application.md' => 'Application',
              'marionette.application.module.md' => 'ApplicationModule',
              'marionette.approuter.md' => 'AppRouter',
              'marionette.callbacks.md' => 'Callbacks',
              'marionette.collectionview.md' => 'CollectionView',
              'marionette.commands.md' => 'Commands',
              'marionette.compositeview.md' => 'CompositeView',
              'marionette.configuration.md' => 'Configuration',
              'marionette.controller.md' => 'Controller',
              'marionette.functions.md' => 'Functions',
              'marionette.itemview.md' => 'ItemView',
              'marionette.layout.md' => 'Layout',
              'marionette.region.md' => 'Region',
              'marionette.regionmanager.md' => 'RegionManager',
              'marionette.renderer.md' => 'Renderer',
              'marionette.requestresponse.md' => 'RequestResponse',
              'marionette.templatecache.md' => 'TemplateCache',
              'marionette.view.md' => 'View',
      	  ); 
          
          foreach ($MarionetteList as $key => $value) {
          	  $class = ($ref == 'public/packages/marionette/docs/'.$key) ? ' class="active"' : '';
              echo '<li'.$class.'><a href="/docs?f=public/packages/marionette/docs/'.$key.'">'.$value.'</a></li>';
          }

      	  ?>
      	</ul>
      </div>
      <div class="span9">{{$html}}</div>
    </div>
  </div>  
</body>
</html>