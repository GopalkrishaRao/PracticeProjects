<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="stylesheet" href="../../../codeIgniter/02_project/Assets/css/bootstrap.min.css"> -->

<?= link_tag("Assets/css/bootstrap.min.css"); ?>
    <title>Document</title>
</head>
<body style="background:grey">
<?php include('header.php'); ?>
<div class="container" >
    <h1 style="margin-top:20px">Admin form- Log In</h1>


    <?php  if($error=$this->session->flashdata('Login_failed')):  ?>
        <div class="row">
        <div class="col-lg-6">
        <div class="alert alert-danger">
        <?= $error; ?>
        </div>
        </div>
        </div>

    <?php endif; ?>

    <?php  if($sccces=$this->session->flashdata('user_registered')):  ?>
        <div class="row">
        <div class="col-lg-6">
        <div class="alert alert-success">
        <?= $sccces; ?>
        </div>
        </div>
        </div>

    <?php endif; ?>

    <?php echo form_open('Admin/login'); ?>
    <div class="row">
    <div class="col-lg-6">

        <div class="form-group">
            <label for="exampleInputEmail1">User Name</label>
            
            <!-- <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"> -->
            <?php echo form_input(['class'=>'form-control', 'placeholder'=>'Enter Username', 'name'=>'uname', 'value'=>set_value('uname')]); ?>
            
        </div>
        <?php echo form_error('uname');?>
    </div>
    </div>

    <div class="row">
    <div class="col-lg-6">

        <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
            <!-- <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"> -->
         <?= form_password(['class'=>'form-control', 'placeholder'=>'Enter Password', 'type'=>'password', 'style'=>'margin-bottom:20px', 'name'=>'pass', 'value'=>set_value('pass')]); ?>
        </div>

        
        <?php echo form_error('pass');?>
        
  </div>
  </div>

  <!-- <button type="submit" class="btn btn-default"  style="margin-top:20px">Submit</button> -->
  <?= form_submit(['class'=>'btn btn-default', 'type'=>'submit', 'value'=>'submit']);?>

  <?= form_reset(['class'=>'btn btn-primary', 'type'=>'reset', 'value'=>'Reset']);?>

  <?= anchor('Admin/register/', "Sign Up?", 'class="link"-class');?>
</div>
<?php include('footer.php'); ?>

</body>
</html>