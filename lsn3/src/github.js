import React, { Component } from 'react'


const url = "https://api.github.com/users/OkYesAnap";
class GitApi extends Component {
    constructor() {
        super();
        this.state = { data: 1 };
    }
    componentWillReceiveProps(nextProps, nextState){
        console.log(this.props);
        console.log(this.state);
    }
    shouldComponentUpdate(){
        return (this.nextProps % 3)
    }
    increment() {
        this.setState({ data: this.state.data + 1 });
    }
    render() {
        return (
            <button onClick={this.increment.bind(this)}>{this.state.data}</button>
        )
    }
}

export default GitApi;