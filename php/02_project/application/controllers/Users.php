<?php

class Users extends CI_Controller{
    public function index(){
        // $this->load->helpr('url');
       $this->load->view('users/Login');
    }
}

?>
