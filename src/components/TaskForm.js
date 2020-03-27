import React, { useContext, useState, useEffect } from 'react'
import { TaskListContext } from '../context/TaskListContext'

export const TaskForm = () => {
    const { addTask, clearTask, editItem, editTask } = useContext(TaskListContext)
    const [title, setTitle] = useState("")
    const handleChange = e => {
        setTitle(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        if(!editItem){
            addTask(title)
            setTitle('')
        }
        else{
            editTask(title, editItem.id)
        }
        
    }
    useEffect(() => {
        if(editItem){
            setTitle(editItem.title)
        }
        else {
            setTitle("");
        }
    }, [editItem])
    return (
        <form
            onSubmit={handleSubmit}
            className="form">
            <input
                type="text"
                onChange={handleChange}
                className="task-input"
                value={title}
                placeholder="Enter task you want to add"
                required />
            <div className="buttons">
                <button type="submit" 
                className="btn add-task-btn">{editItem?'Edit':'Add'} Task</button>
                <button onClick={clearTask}
                className="btn clear-btn">Clear</button>
            </div>
        </form>
    )
}

export default TaskForm