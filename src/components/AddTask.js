import React from 'react'
import { Button, Container } from 'react-bootstrap';
import './Todo.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const AddTask = () => {
  return (
    <> 
        <input type="text" className="input m-2 text-center" placeholder="Add a new task"/>
        <Button className='buttonAdd text-center'>Add Task</Button>
     </>
  )
}

export default AddTask