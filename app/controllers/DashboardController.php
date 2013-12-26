<?php

class DashboardController extends BaseController
{
    
    public $layout = 'dashboard.layout';
    
    protected $_jsApplicationPath = 'app';
    
    public function __construct()
    {
        $this->_jsApplicationPath = $_SERVER['DOCUMENT_ROOT'] . '/' . trim($this->_jsApplicationPath, '/');        
    }
    
    
    /**
    * 
    */
    protected function setupLayout()
    {
        parent::setupLayout();
        
        $this->_prepareJsFiles('collections');
        $this->_prepareJsFiles('models');
        //$this->_prepareJsFiles('templates');
        $this->_prepareJsFiles('views');
        $this->_prepareJsFiles('controllers');
    }
    
    
    /**
    * Ищет файлы в указанной директории JS приложения и передает их в шаблон
    * 
    * @param mixed $type
    */
    protected function _prepareJsFiles($type)
    {
        $_dirPath = $this->_jsApplicationPath . '/' . $type;
        
        if (!file_exists($_dirPath)) {
            throw new Exception("Dir for js application type '{$type}' not found.");
        }
        
        $items = array();
        $files = scandir($_dirPath);
        if (count($files) > 0) {
            foreach ($files AS $file) {
                if (!is_dir($file)) {
                    $items[] = $file;
                }
            }
        }
        
        $this->layout->$type = $items;
    }

    public function getIndex()
    {
        //
    }

}