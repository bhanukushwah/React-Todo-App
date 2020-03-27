import React from 'react'
import '../App.css'
import TaskListContextProvider from '../context/TaskListContext'
import TaskList from './TaskList'
import TaskForm from './TaskForm'
import Header from './Header'
import Footer from './Footer'
const App = () => {
    return (
        <TaskListContextProvider>
            <div className="container">
                <div className="app-wrapper">
                    <div className="main">
                        <Header />
                        <TaskForm />
                        <TaskList />
                    </div>
                </div>
                <Footer />
            </div>
        </TaskListContextProvider>
    )
}

export default App
