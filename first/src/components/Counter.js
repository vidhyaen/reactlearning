import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props)
      this.state=({
        count: 0
      })
    }
    increment()
    {
      // this.setState({
      //   count: this.state.count + 1
      // })
      this.setState(prevState =>({
        count: prevState.count + 1
      }))
    
    }
    fiveincrement()
    {
      this.increment()
      this.increment()
      this.increment()
      this.increment()
      this.increment()
     
    }
   
      
    render()
    {
      return (
        <div>
          <div>Count{this.state.count} </div>
          <button onClick={() => this.fiveincrement()}>increment</button>
          
        </div>
      )
    }
  }
export default Counter