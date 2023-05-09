import React, {useState} from 'react';
import { Container, FormGroup, Input, Button, Form, InputGroup, InputGroupAddon
 } from 'reactstrap';
 import { v4 } from 'uuid';
 import {connect} from 'react-redux';
 import {addTodo} from "../action/todo"

const TodoForm=({addTodo})=> {
    const [title, setTilte] = useState('')
  return (
    <Form>
        <FormGroup>
            <InputGroup>
                <Input
                    type='text'
                    name='todo'
                    id='todo'
                    placeholder='Add todo'
                />
                <InputGroupAddon addonType="prepend">
                    <Button color='primary'>
                        Add
                    </Button>
                
                </InputGroupAddon>
            </InputGroup>
        </FormGroup>
    </Form>
  )
}

export default TodoForm