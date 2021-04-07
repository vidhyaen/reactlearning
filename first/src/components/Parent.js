import React, { Component } from 'react' 
import Child from './Child'

export class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             ParentName:'Parent'
        }
        this.greetParent=this.greetParent.bind(this)
    }
    
    greetParent(childName)
    {
        alert(`Heloo ${this.state.ParentName} from ${childName}`)
    }
    render() {
        return (
            <div>
                <Child greetHandler={this.greetParent}/> 
                {/* #pass method as prop */}
            </div>
        )
    }
}

export default Parent
