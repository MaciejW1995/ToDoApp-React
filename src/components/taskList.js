import React from 'react';
import Task from './task';
import './taskList.css'

const TaskList = (props) => {

    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);
    
    if (done.length >= 2){
        done.sort((a, b) => {
            if(a.finishDate < b.finishDate){
                return 1
            }
            if(a.finishDate > b.finishDate){
                return -1
            }
            return 0
        })
    }

    if(active.length >= 2){
        active.sort((a, b) => {

            a = a.text.toLowerCase()
            b = b.text.toLowerCase()

            if(a.text < b.text) return -1;
            if(a.text > b.text) return 1;
            return 0
        })
    }

    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>)
    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>)

    

    return(
        <>
        <div className='active'>
            <h2>Zadania do wykonania</h2>
            {activeTasks.length > 0 ? activeTasks : <p>Brak zadań do wykonania</p>}
        </div>
        <div className='done'>
        <h3>Zadania wykonane {done.length}</h3>
        {done.length > 5 &&<p style={{ fontSize: "10px"}}>Wyświetlono jedynie 5 ostatnich zadań</p>}
        {doneTasks.slice(0,5)}
        
    </div>
    </>
    )
}

export default TaskList