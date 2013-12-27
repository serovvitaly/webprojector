<?php

class HomeController extends BaseController {

	/*
	|--------------------------------------------------------------------------
	| Default Home Controller
	|--------------------------------------------------------------------------
	|
	| You may wish to use controllers instead of, or in addition to, Closure
	| based routes. That's great! Here is an example controller method to
	| get you started. To route to this controller, just add the route:
	|
	|	Route::get('/', 'HomeController@showWelcome');
	|
	*/

    public function getIndex()
    {   
        return View::make('index');
    }

	public function postIndex()
	{   
        $email = Input::get('email');
        $password = Input::get('password');
        
        if (Auth::attempt(array('email' => $email, 'password' => $password))) {
            return Redirect::intended('dashboard');
        } else {
            $user = User::where('email', '=', $email)->first();
            if (!$user) {
                $user = new User;
                
                $user->email    = $email;
                $user->password = Hash::make($password);
                
                $user->save();
                
                if (Auth::attempt(array('email' => $email, 'password' => $password))) {
                    return Redirect::intended('dashboard');
                }
            }
        }
        
		return View::make('index');
	}

}