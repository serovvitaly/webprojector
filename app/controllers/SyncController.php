<?php

class SyncController extends BaseController {

    public function actionStore($model, $id = 0)
    {
        $modelName = ucfirst( strtolower( trim($model) ) );
        
        
        if (class_exists( $modelName )) {
            switch ( Request::getMethod() ) {
                // read 
                case 'GET':
                    $mod = $modelName::find($id);
                    break;
                // create
                case 'POST':
                    $mod = $modelName::create((array) Input::all());;
                    break;
                // update 
                case 'PUT':
                    $mod = $modelName::find($id);
                    break;
                // delete 
                case 'DELETE':
                    $mod = $modelName::destroy($id);
                    break;
            }
        }
        
        return $mod;
    }

}