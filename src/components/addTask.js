import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {
    minDate = new Date().toISOString().slice(0,10)
    state = {
        text: '',
        checked: false,
        date: this.minDate
    }

    handleText = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleCheckbox = (e) => {
        this.setState({
            checked: e.target.checked
        })
    }

    handleDate = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    handleNew = () => {
        const { text, date, checked } = this.state;
        if( text.length>2){
            const add = this.props.add(text, date, checked);
            if(add){
                this.setState({
                    text: '',
                    checked: false,
                    date: this.minDate
                })
            }
        }else {
            alert('za krótka nazwa min. 3 litery')
        }
        
       
    }

    render(){
        let maxDate = this.minDate.slice(0,4) * 1 + 1;
        maxDate = maxDate + "-12-31"
        return(
           <div className='form'>
                <input type="text" placeholder='Dodaj zadanie...' value={this.state.text} onChange={this.handleText}></input>
                <input type="checkbox" checked={this.state.checked} id="important" onChange={this.handleCheckbox}></input>
                <label htmlFor='important'>Priorytet</label>
                <br/>
                <label htmlFor='date'>Do kiedy wykonać zadanie</label> 
                <input type="date" id='date' value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleDate}></input>
                <br/>
                <button onClick={this.handleNew}>DODAJ</button>
            </div>
            
        )
    }
}

export default AddTask;