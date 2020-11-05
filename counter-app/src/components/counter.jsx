import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        value: this.props.counter.value,
     }

    render() { 
        return ( 
            <React.Fragment>
                <p>          
                <h4>Title #{this.props.counter.id}</h4>  
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncreament}>Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
                </p>
            </React.Fragment>
         );
    }

    formatCount = () => {
        const { value } = this.state;
        return value === 0 ? <h1>Zero</h1> : value;
    }

    getBadgeClasses = () => {
        
        let classes = 'badge m-2 badge-';
        classes += this.state.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    handleIncreament = () => {
        this.setState({
            value: this.state.value += 1
        });
    }
}
 
export default Counter;