
<?php include('header.php')?>

<div class="container" style="margin-top:50px;"">
<div class="row">
<?=   anchor('Admin/adduser','Add Articles',['class'=>'btn btn-lg btn-primary'])  ?>
</div>


<div class="container" style="margin-top:50px;">
    <?php  if($msg=$this->session->flashdata('msg')): 
        $msg_class=$this->session->flashdata('msg_class')
    ?>
<div class="row">
<div class="col-lg-6">
<div class="alert <?= $msg_class ?>">
<?= $msg; ?>
</div>
</div>
</div>

<?php endif; ?>
</div>

<div class="container">
    <div class="table">
        <table>
            <tr>

                <th>S. No</th>
                <th>Title</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
             
        <?php if(count($articles)):
            $count=$this->uri->segment(3); ?> 
            <?php foreach ($articles as $art): ?>
                
            <tr>
                <td><?= ++$count  ?></td>
                <td><?= $art->article_title;  ?></td>
                <td>
                    <!-- <a href="#" class='btn btn-primary'>
                        Edit
                    </a> -->
                    <?=  anchor("Admin/edituser/{$art->id}",'Edit',['class'=>'btn btn-default']);  ?>
                 </td>
                 <td>
                    <!-- <a href="#" class='btn btn-danger'>
                        Delete
                    </a> -->
                    <?=
                    form_open('Admin/delarticles'),
                    form_hidden('id',$art->id),
                    form_submit(['name'=>'submit','value'=>'Delete','class'=>'btn btn-danger']),
                    form_close();
                    ?>
                 </td>
            </tr>
           <?php endforeach; ?>
           <?php else: ?>
            <tr>
                <td collspan="3">No data available</td>
            </tr>
        <?php endif; ?> 
        </table>

    </div>
</div>


<?php  echo $this->pagination->create_links();   ?> 


<!-- pagination end -->
<?php include('footer.php')?>
