<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Laravel PHP Framework</title>
  <link rel="stylesheet" type="text/css" href="/packages/common/normalize.css">
  <link rel="stylesheet" type="text/css" href="/packages/semantic/packaged/css/semantic.min.css">
  
  <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.no-icons.min.css">
  
  <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800|Open+Sans+Condensed:300,700,300italic&subset=latin,cyrillic-ext,cyrillic' rel='stylesheet' type='text/css'>
  
  <style type="text/css">
    html, html input, body{
        font-family: "Open Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        font-family: Tahoma !important;
        font-family: 'Open Sans', sans-serif;
        font-size: 13px;
        font: normal 13px arial,sans-serif !important
    }
    .ui.menu{
        border-radius: 0;
    }
    .ui.dimmer{
        background-color: rgba(0, 0, 0, 0.25);
    }
    .ui.modal{
        border: 1px solid #939DAD;
        border-radius: 0;
        box-shadow: 1px 1px 7px 0px rgba(0, 0, 0, 0.2);
    }
    .ui.input input{
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 0;
        font-size: 13px;
        font-family: arial !important;
        padding: 8px 0;
    }
    .ui.selection.dropdown{
        border-radius: 1px !important;
    }
    .super-title{
        font-size: 28px;
        font-weight: 300;
        margin: 0;
       /* text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.15); */
       /* font-family: 'Open Sans', sans-serif;  */
        /*font-family: 'Open Sans Condensed', sans-serif;*/
    }
  </style>
  
  <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
  
</head>
<body>
<div id="dashboard-application-layout"></div>

<script src="/packages/common/require.js"></script>
  
<script src="/packages/common/json2.js"></script>
<script src="/packages/semantic/packaged/javascript/semantic.min.js"></script>

  
<script>
  
console.group = undefined;
console.table = undefined;

function builtLayout(){
    $('.ui.dropdown').dropdown();
    
    //$('.title').popup();
    
    /*$('#dashboard-base-sidebar')
        .sidebar({overlay: false})
        .sidebar('toggle')
        .sidebar('attach events', '.sidebarer')
    ; */
    
    $('#modal-project-add')
        //.modal('setting', 'transition', 'fade down')
        .modal('setting', {
            closable  : false,
            onDeny    : function(){
                //TODO: CLEAR-FORM
            },
            onApprove : function() {
                //
                $('#modal-project-add input').val('');
                //return false;
            }
        })
        .modal('attach events', '.modal-project-add', 'show')
    ;
}
      
</script>

<script src="/app/app.js?foo=<?= rand(1000, 9999) ?>"></script>
  
</body>
</html>