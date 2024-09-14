import React from 'react'
import './Todo.css'
import { Button, Container } from 'react-bootstrap';
import { useState } from 'react';
import ListTasks from './ListTasks'
import AddTask from './AddTask'
import 'bootstrap/dist/css/bootstrap.min.css';


const ToDo = () => {
  const[tasks, setTasks] = useState([
    {title: "Learn HTML"},
    {title: "Exercise"},
    {title: "Walk"}
  ]);
  return (
    <Container className='containerClass'>  
      <div className='todoClass '> 
      <img className='imageLogo img-fluid' src={require("./logo.png")} alt="Logo" />
      <div className='addTaskClass m-1'> 
           <AddTask/>
      </div>
      <div className='listTaskClass m-4'>Pending Tasks
              {tasks.map((task)=> (
                <ListTasks/>
            ))}
      </div>
      </div>
    </Container>
  )
}
export default ToDo