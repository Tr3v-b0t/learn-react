import React, { Component } from 'react'

class Eventbind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'we are just trying to bind the event'
      };
    //   this.clickHandler = this.clickHandler.bind(this);
    };

    // clickHandler() {
    //     this.setState({
    //         message: 'binded hurreeeeh!!'
    //     });
    // }

    clickHandler = () => {
        this.setState({
            message: 'binded hurreeeeh!!'
        });
    }
    
    render() {
        return (
            <div>
            <div>{this.state.message}</div>
               {/* <button onClick={this.clickHandler.bind(this)}>CLICK!</button>*/}
            {/*<button onClick={()=> this.clickHandler()}>CLICK!</button>*/}
               <button onClick={this.clickHandler}>CLICK!</button>
            </div>
        )
    }
}

export default Eventbind
