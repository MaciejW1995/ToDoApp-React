import React from 'react';
import './task.css'

const Task = (props) => {

    const style = {
        color: "red",
    }

    const{ text, date, id, active, important, finishDate } = props.task;
    if(active){ 
        return(
        <div>
            <p>
            <strong style={important ? style : null}>{text}</strong> - <span>{date}</span>
            <button onClick={() => props.change(id)}>Wykonane</button>
            <button onClick={() => props.delete(id)}>X</button>
            </p>
        </div>
    )}else {
        const finish = new Date(finishDate).toLocaleString()
        return (
        <div>
             <p>
            <strong>{text}</strong> - <span>{date}</span><br/>
            <strong style={{color: "green"}}>🗸  wykonano {finish}</strong>
            <button onClick={() => props.delete(id)}>X</button>
            </p>
        </div>
        )
    }
}

export default Task