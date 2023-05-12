import React, {useState} from 'react';
import { Container, FormGroup, Input, Button, Form, InputGroup, InputGroupAddon
 } from 'reactstrap';
 import { v4 } from 'uuid';
 import {connect} from 'react-redux';
 import {addTodo} from "../action/todo"

const TodoForm=({addTodo})=> {
    const [title, setTilte] = useState('');
    const handleSubmit =e=>{
        e.preventDefault();
        if (title===""){
            alert("Please Add Todo")
        }

        const todo={
            title,
            id: v4()
        }

        addTodo(todo);

        setTilte("")


    }
  return (
    <Form onSubmit={handleSubmit}>
        <FormGroup>
            <InputGroup>
                <Input
                    type='text'
                    name='todo'
                    id='todo'
                    placeholder='Add todo'
                    value={title}
                    onChange={(e)=>setTilte(e.target.value)}
                />
                <InputGroupAddon addonType="prepend">
                    <Button 
                        onClick={handleSubmit}
                        color='primary'>
                        Add
                    </Button>
                
                </InputGroupAddon>
            </InputGroup>
        </FormGroup>
    </Form>
  )
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    addTodo: todo =>{
        dispatch(addTodo(todo))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);