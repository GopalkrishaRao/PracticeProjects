<?php
class Loginmodel extends CI_Model
{
    public function isValidate($username, $password)
    {
        // connect to db  select * from users where username= $username, password=$password;

        $q=$this->db->where(["username"=>$username,"password"=>$password])
                    ->get('users');

                    /*
                    For debugging

                    echo "<pre>";
                    print_r($q);
                    print_r($q->result());
                    exit;
                    */

        if ($q->num_rows()) {
            // Send id to Admin php for session storage
            return $q->row()->id;
        }else{
            return false;
        }           
    }

    public function articleList($limit,$offset)
    {
        $id=$this->session->userdata('id');
        $q=$this->db->select()
                    ->from('article')
                    ->where('user_id',$id)
                    ->limit($limit,$offset)
                    ->get();

        return $q->result();

    }
    

    public function add_articles($array)
  {
     return $this->db->insert('article',$array);
  }

  public function add_user($array)
  {
     return $this->db->insert('users',$array);
  }

  public function del($id)
  {
  return $this->db->delete('article',['id'=>$id]);
  // return  $this->db->delete('articles')
  //           ->where(['id'=>$id]);
  }

  public function num_rows()
  {
    $id=$this->session->userdata('id');
    $q=$this->db->select()
            ->from('article')
            ->where(['user_id'=>$id])
            ->get();
           return $q->num_rows();
  }

  public function find_article($articleid)
  {
    $q=$this->db->select(['article_title','article_body','id'])
            ->where('id',$articleid)
            ->get('article');
            return $q->row();
    }

    public function update_article($articleid,Array $article)
    {
        return $this->db->where('id',$articleid)
                   ->update('article',$article);
  }
    
}
?>