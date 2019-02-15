<?php
namespace App\Controller;

use App\Controller\AppController;

class Hello4Controller extends AppController {

  public function index() {
    $this->viewBuilder()->autoLayout(false);
    $this->set('title','Hello!');
    $this->set('messege','This is messege!');
  }
}
