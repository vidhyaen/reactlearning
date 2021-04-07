import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export default class LifeCycleA extends Component {
  constructor(props) {
      super(props)
  
      this.state = {
           name:'vidhu'
      }
      console.log('LifecyceleA constructor')
  }
  static getDerivedStateFromProps(state,props)
  {
      console.log('getdervied')
      return null
  }
  componentDidMount()
  {
      console.log('Didmount A')
  }
  shouldComponentUpdate()
  {
      console.log('shouldComponent UpA')
      return true
  }
  getSnapshotBeforeUpdate(prevProps,prevState)
  {
      console.log('Beforeupdate A')
      return null
  }
  componentDidUpdate()
  {
      console.log('component didUpdateA')
  }
 changeState = () =>{
     this.setState(
         {
             name:'evolution'
         }
     )
 }
    render() {
        console.log('lifecycle A render')

        return (
            <div>
                <div>LifecyceleA</div>
                <button onClick={this.changeState}>change</button>
                <LifeCycleB/>
            </div>
        )
    }
}
