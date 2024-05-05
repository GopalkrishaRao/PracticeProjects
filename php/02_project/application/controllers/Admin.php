<?php

class Admin extends MY_Controller
{
   
    public function login(){
        // $this->load->library('form_validation');
        
        // if user is loggin in already and try to chanange url to /log in rediret to welcome page
        if($this->session->userdata('id')){
            return redirect('Admin/welcome');
        };


        // else login
        $this->form_validation->set_rules('uname', 'User Name', 'required|alpha');
        $this->form_validation->set_rules('pass', 'Password', 'required|max_length[12]');

        $this->form_validation->set_error_delimiters( "<div class='text-danger'>", '</div>');

        if($this->form_validation->run()){
            $uname=$this->input->post('uname');
            $pass=$this->input->post('pass');
            // echo "user name" . $uname.'<br>' . 'passord'. $pass;

            $this->load->model('Loginmodel');

            // Run db query and get id trhout Login model
            $user_id=$this->Loginmodel->isValidate($uname, $pass);
            if($user_id){
                // echo "Details Matched";

                // create session
                $this->session->set_userdata('id', $user_id);
                return redirect('Admin/welcome');
                
                
            }else{ 
                // echo "Details Doesnot Match";
                $this->session->set_flashdata('Login_failed', 'Invalied username/Password');
                return redirect('Admin/login');
            };
            
        
        }else{
            $this->load->view('users/Login');
            /*
             <?php  echo validation_errors(); ?>
             */
        };
    }

    public function welcome()
    {
        // unable to set this if condition in __constructor
        if(!$this->session->userdata('id')){
            return redirect('Admin/login');
        };



        $this->load->model('Loginmodel');

        // pagination
        $this->load->library('pagination');
        $config=[
        'base_url' => base_url('Admin/welcome'),
        'per_page' =>2,
        'total_rows' => $this->Loginmodel->num_rows(),
        'full_tag_open'=>"<ul class='pagination'>",
        'full_tag_close'=>"</ul>",
        'next_tag_open' =>"<li>",
        'next_tag_close' =>"</li>",
        'prev_tag_open' =>"<li>",
        'prev_tag_close' =>"</li>",
        'num_tag_open' =>"<li>",
        'num_tag_close' =>"</li>",
        'cur_tag_open' =>"<li class='active'><a>",
        'cur_tag_close' =>"</a></li>"
        ];
        $this->pagination->initialize($config);

        


        $articles=$this->Loginmodel->articleList($config['per_page'],$this->uri->segment(3));
        // Load admin dahsboard and pass articles to view
        $this->load->view('Admin/dashboard', ['articles'=>$articles]);   
    }

    public function adduser()
    {
        $this->load->view('Admin/add_article');
    }

    public function userValidation()
    {
        // add_article_rules is under config>form_validation.php file 
        if($this->form_validation->run('add_article_rules')){
            
            $post=$this->input->post(); 
            $this->load->model('Loginmodel','useradd');
            if($this->useradd->add_articles($post)){
                $this->session->set_flashdata('msg','Articles added successfully');
                $this->session->set_flashdata('msg_class','alert-success');
            }else{
                $this->session->set_flashdata('msg','Articles not added Please try again!!');
                $this->session->set_flashdata('msg_class','alert-danger');
            }
            return redirect('Admin/welcome');
        }else{
            $this->load->view('Admin/add_article');
        }
    }

    

    public function register()
    {
        $this->load->view('Admin/register');
    }


    public function sendemail()
    {
        $this->form_validation->set_rules('username','User Name','required|alpha');
        $this->form_validation->set_rules('password','Password','required|max_length[12]');
        $this->form_validation->set_rules('firstname','First Name','required|alpha');
        $this->form_validation->set_rules('lastname','last Name','required|alpha');
        $this->form_validation->set_rules('email','Email','required|valid_email|is_unique[users.email]');
      $this->form_validation->set_error_delimiters('<div class="text-danger">', '</div>');

        if($this->form_validation->run())
        {
              $post=$this->input->post(); 
            $this->load->model('Loginmodel','user');

            if($this->user->add_user($post))
            {
               $this->session->set_flashdata('user_registered','User added successfully please login');
               $this->session->set_flashdata('user_class','alert-success');
            }
          
            return redirect('Admin/login');

        }else{
            $this->session->set_flashdata('user','User not added Please try again!!');
              $this->session->set_flashdata('user_class','alert-danger');
            redirect('Admin/register');
        }



        

        // if($this->form_validation->run()){
        //     $this->load->library('email');
        //     $this->email->from(set_value('email'),set_value('firstname'));
        //     $this->email->to("hrgkrao@gmail.com");
        //     $this->email->subject("Registratiion Greeting..");

        //     $this->email->message("Thank  You for Registratiion");
        //     $this->email->set_newline("\r\n");
        //     $this->email->send();

        //     if (!$this->email->send()) {
        //         show_error($this->email->print_debugger()); 
        //     }else {
        //         echo "Your e-mail has been sent!";
        //     }
        // }else{
        //     $this->load->view('Admin/register');
        // }
    }

    public function edituser($id)
    {
        $this->load->model('Loginmodel');
        $article=$this->Loginmodel->find_article($id);
        $this->load->view('Admin/edit_article',['article'=>$article]);
   
    }

    public function updatearticle($article_id)
    {
        if($this->form_validation->run('add_article_rules')){
            $post=$this->input->post(); 
            //$articleid=$post['article_id'];
            //unset($articleid);
            $this->load->model('Loginmodel','editupdate');

            if($this->editupdate->update_article($article_id,$post)){
                $this->session->set_flashdata('msg','Article Update successfully');
                $this->session->set_flashdata('msg_class','alert-success');
            }else{
                $this->session->set_flashdata('msg','Articles not update Please try again!!');
                $this->session->set_flashdata('msg_class','alert-danger');
            }
         return redirect('Admin/welcome');
        }else{
            $this->edituser($article_id);
        }
   
    }
    
     public function logout()
     {
        $this->session->unset_userdata('id');
        redirect('Admin/login');
     }
    


     public function delarticles()
    {
        $id=$this->input->post('id');
  
        $this->load->model('Loginmodel','delarticle');
        if($this->delarticle->del($id))
        {
          $this->session->set_flashdata('msg','Deleted Successfully');
          $this->session->set_flashdata('msg_class','alert-success');
        }
        else
        {
         $this->session->set_flashdata('msg','Please try again..not delete');
         $this->session->set_flashdata('msg_class','alert-danger');
        }
      return redirect('Admin/welcome');

 }
    // public function __construct()
    // {
    //   parent::__construct();
    //   if( ! $this->session->userdata('id') )
    //   return redirect('Admin/login');
      
    // }
  
    
}

?>
