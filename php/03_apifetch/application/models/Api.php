<?php
class Api extends CI_Model
{
    public function fetch_users() {
        // Make API request to fetch data
        $response = file_get_contents('https://jsonplaceholder.typicode.com/users');
        // Decode JSON response
        $data['users'] = json_decode($response, true);
        return $data;
    }    
}
?>