import React, { Component } from 'react'

 class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            message: 'Hello' 
        }
        //binding class constructor: this.clickHandler=this.clickHandler.bind(this)
    }
    // clickHandler()
    // {
    //     this.setState({
    //         message:'goodbyee'
    //     })

    // }
    //arrow func as base property
    clickHandler = () =>{
     this.setState(
         {
            message:'goodbyee'
         }
        
     )
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* approach 1: binding in render performace implication <button onClick={this.clickHandler.bind(this)}>Click</button> */}
               {/*approach 2 arrow func in render <button onClick={()=>this.clickHandler()}>Click</button>
               best approach 3 binding class constructor<button onClick={this.clickHandler}>Click</button>
                <button onClick={}>Click</button> 
                final approach arrow function as base property*/}
               <button onClick={this.clickHandler}>Click</button>   
            </div>
        )
    }
}

export default EventBind
