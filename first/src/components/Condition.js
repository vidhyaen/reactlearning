import React, { Component } from 'react'

export class Condition extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLogined:false
        }
    }
  
    render() {
        // 1st approach if/else
// if(this.state.isLogined)
// {
//     return <div>Welcome vidhu </div>
// }
// else{
//   return  <div>Welcome ananomous</div>
// }

        //2nd approach element variables: message is variable to render
        // let message
        // if(this.state.isLogined){
        //    message= <div>Welcome vidhu</div>
        // }
        // else{
        //   message=  <div>Welcome ananomous</div>
        // }

        // // 3rd approach ternary condition
        

        // return (
        //     this.state.isLogined ?
        //     <div>Welcome vidhu</div> :
        //     <div>Welcome ananomous</div>

        //     // <div>
        //     //     {/* {message} */}
        //     // </div>
        // )
        // 4th approach short circuit when you want todo either something or nothing use this 
        // if it is true righthand is evaluted or if it is false it will never go to righthand instead it return nothing
        return this.state.isLogined && <div>Welcome vidhu</div>
    }
}

export default Condition

