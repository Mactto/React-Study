import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count: 0,
     }

    render() { 
        return ( 
            <React.Fragment>                
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncreament}>Increment</button>
            </React.Fragment>
         );
    }

    formatCount = () => {
        const { count } = this.state;
        console.log(count);
        return count === 0 ? <h1>Zero</h1> : count;
    }

    getBadgeClasses = () => {
        
        let classes = 'badge m-2 badge-';
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    }

    handleIncreament = () => {
        console.log('sef');
    }
}
 
export default Counter;