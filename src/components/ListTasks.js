import React from 'react'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Todo.css'

const ListTasks = () => {
  return (
    <div className='listTask d-flex justify-content-between align-items-center'>
        <div className='taskInput m-2'>Add</div>
        <Button className='buttonDelete m-2'>Delete Task</Button>
    </div>
  )
}

export default ListTasks