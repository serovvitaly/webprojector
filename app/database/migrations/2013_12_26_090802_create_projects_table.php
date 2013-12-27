<?php

use Illuminate\Database\Migrations\Migration;

class CreateProjectsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
        Schema::create('users', function($table){
            $table->increments('id');
            $table->string('email');
            $table->string('password');
            $table->timestamp('created_at');
            $table->timestamp('updated_at');
        });
        
        Schema::create('projects', function($table){
            $table->increments('id');
            $table->string('title');
            $table->timestamp('created_at');
            $table->timestamp('updated_at');
            $table->integer('user_id')->unsigned();
            //$table->foreign('user_id')->references('id')->on('users');
        });
        
		Schema::create('tasks', function($table){
            $table->increments('id');
            $table->string('title');
            $table->integer('parent_id')->unsigned();
            $table->integer('project_id')->unsigned();
            $table->text('description');
            $table->timestamp('created_at');
            $table->timestamp('updated_at');
            $table->integer('user_id')->unsigned();
            //$table->foreign('project_id')->references('id')->on('projects');
            //$table->foreign('user_id')->references('id')->on('users');
        }); 
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
        //$table->dropForeign('projects_user_id_foreign');
        //$table->dropForeign('tasks_project_id_foreign');
        //$table->dropForeign('tasks_user_id_foreign');
        
        Schema::drop('tasks');
        Schema::drop('projects');
		Schema::drop('users');
	}

}