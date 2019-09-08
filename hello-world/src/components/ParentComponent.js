import React, { Component } from 'react';
import ChildComponent from './ChilldComponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName : 'the component\'s father'
        }
    }

    greetParent = (childName) => {
        alert(`hello ${this.state.parentName} from ${childName}`);
    }
    
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent
