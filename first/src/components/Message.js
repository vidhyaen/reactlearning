import React from 'react';
import { Component } from 'react';
class Message extends Component{
constructor()
{
    super()
    this.state={
        Message:'Welcome vistor'
    }
}   
changeMessage()
{
    this.setState(
        {
           Message: 'Thank you for subscribing'})
}

render()
{
    return(
        <div>
            <h1>{this.state.Message}</h1>
            <button onClick={()=>this.changeMessage()}> Subscribe</button>
        </div>
       
    )
}
 
 }
 export default Message;