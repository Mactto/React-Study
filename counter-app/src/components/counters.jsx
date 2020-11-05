import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 1},
            {id: 3, value: 2},
            {id: 4, value: 3},
        ]
     }

    handleDelte = (counterId) => {
        console.log('Event Handler 호출' + counterId);
    };

    handleReset = () => {
        console.log('reset');
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters});
    }

    render() { 
        return ( 
            <div>
                {this.state.counters.map(counter => (
                    <React.Fragment>
                        <button onClick={this.handleReset}>Reset</button>
                        <Counter 
                        key={counter.id} 
                        onDelete={this.handleDelte}
                        counter={counter}>
                        </Counter>
                    </React.Fragment>
                ))}
            </div>
         );
    }
}
 
export default Counters;