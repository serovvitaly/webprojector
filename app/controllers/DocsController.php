<?php

use \Michelf\Markdown;

class DocsController extends BaseController
{
    
    public function getIndex()
    {
    	$fileName = dirname($_SERVER['DOCUMENT_ROOT']) . '/' . trim(Input::get('f'), '/');

    	if (file_exists($fileName)) {
	        $my_text = file_get_contents($fileName);
	    	$html = Markdown::defaultTransform($my_text);
    	} else {
    		$html = "Файл не найден - {$fileName}";
    	}

    	return View::make('docs', array('html' => $html));
    }

}