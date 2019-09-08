import React, { Component } from 'react'

export default class message extends Component {

    constructor() {
        super();
        this.state = {
            message: "This our first state message"
        }
    }

    changeMessage() {
        this.setState({
            message: 'Our state has just changed to this!'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Set State</button>
            </div>
        )
    }
}
