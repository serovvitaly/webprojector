<?php

class SyncController extends BaseController {

    public function actionStore($model, $id = 0)
    {
        $modelName = ucfirst( strtolower( trim($model) ) );
        
        $user = Auth::user();
        
        $data = Input::all();
        
        $data['user_id'] = $user->id;        
        
        if (class_exists( $modelName )) {
            switch ( Request::getMethod() ) {
                // read 
                case 'GET':
                    $mod = $modelName::find($id);
                    break;
                // create
                case 'POST':
                    $mod = $modelName::create($data);
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