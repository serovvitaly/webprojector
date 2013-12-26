<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

/**
* INSERT
*/
Route::any('/sync/{model}/{id?}', 'SyncController@actionStore');

Route::controller('/dashboard', 'DashboardController');

Route::get('/', function()
{
	return View::make('hello');
});