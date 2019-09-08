import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         loggedIn : false
      };
    };
    
    render() {
        // let message
        // if (this.state.loggedIn){
        //     message = <div>Hey Bon bon</div>
        // } else { 
        //     message = <div>Hey Guest</div>
        // }

        // return message


        // if (this.state.loggedIn){
        //     return (
        //     <div>
        //         Hey Bon bon
        //     </div>
        // )
        // }
        // else {
        //     return (
        //     <div>
        //         Hey Guest
        //     </div>
        // )
        // }


        // return (
        //     this.state.loggedIn ? 
        //     <div>Hey Bon bon</div> :
        //     <div>Hey Guest</div>
        // )

        return this.state.loggedIn && <div>Hey Bon bon</div> 
    }
}

export default UserGreeting
