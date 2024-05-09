<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Fetchapi extends CI_Controller {

public function fetchData ()    {
    $this->load->model('Api');
    $data = $this->Api->fetch_users();
        
        // Pass the fetched data to the view
    $this->load->view('fetchdata', $data);
}

}