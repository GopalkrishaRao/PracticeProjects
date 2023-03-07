import React from "react";
import {ListGroup,
ListGroupItem
} from 'reactstrap';
import {FaCheckDouble} from 'react-icons/fa';


export default function Todos({todos, markComplete}) {
  return (
    <>
    <ListGroup clasName='mt-5 mb-2 items'>
        {todos.map(todo =>(
            <ListGroupItem key={todo.id}>
                {todo.todoString}
                <span className="float-right"
                onClick={()=>markComplete(todo.id)}>
                    <FaCheckDouble/>
                </span>
            </ListGroupItem>
        ))}
    </ListGroup>
    </>
  )
}
