import React, { Component } from 'react'

class Counter extends Component {
    constructor() {
        super();
        this.state = { counter: 0 }
    }
    render() {
        return (<div>
            <h1>
                {this.state.counter}
            </h1>
            <button onClick = { this.add.bind(this) }>ADD</button>
            <button onClick = { this.decay.bind(this) }>DECAY</button>

        </div>)
    }
    add(){
        this.setState(({ counter }) =>({ counter: ++counter }))
    }
    decay(){
        this.setState(({ counter }) =>({ counter: --counter }))
    }
}

export default Counter;