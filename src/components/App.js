import './App.css';
import React, { Component } from 'react';
import AddTask from './addTask';
import TaskList from './taskList';

class App extends Component {
  counter = 6
  state = {
    tasks: []
  }

  deleteTask = (id) => {
    //const tasks = [...this.state.tasks];
    //const index = tasks.findIndex(task => id === task.id)
    //tasks.pop(index)
    //this.setState({
    //  tasks
    //})

    const array = [...this.state.tasks]
    const newArray = array.filter(task => id !== task.id)
    this.setState({
      tasks: newArray
    })
  }

  changeStatus = (id) => {
    const tasks = [...this.state.tasks]
    tasks.forEach(task => {
      if(task.id === id){
        task.active = false
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })
  }

  addTask = (text, date, important) => {
    const task = {
        id: this.counter,
        text: text,
        date: date,
        important: important,
        active: true,
        finishDate: null
    }
    this.counter++


    this.setState((prev)=>({
      tasks : [...prev.tasks, task]
    }))
    //this.setState({
    //  tasks : [...this.state.tasks, task]
    //})


    return true
  }

  render(){
    return(
      <div className='Application'>
        <h1>TODO App</h1>
        <AddTask add={this.addTask}/>
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeStatus}/>
      </div>
      
    )
  }
}

export default App;
