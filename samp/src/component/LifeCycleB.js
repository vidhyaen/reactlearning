import React, { Component } from 'react'

export default class LifeCycleB extends Component {
  constructor(props) {
      super(props)
  
      this.state = {
           name:'vidhu'
      }
      console.log('LifecyceleB constructor')
  }
  static getDerivedStateFromProps(state,props)
  {
      console.log('getdervied B')
      return null
  }
  componentDidMount()
  {
      console.log('Didmount B')
  }
  shouldComponentUpdate()
  {
      console.log('shouldComponent Update B')
      return true
  }
  getSnapshotBeforeUpdate(prevProps,prevState)
  {
      console.log('Beforeupdate B')
      return null
  }
  componentDidUpdate()
  {
      console.log('component didUpdateB')
  }
    render() {
        console.log('lifecycle B render')

        return (
            <div>
                LifecyceleB
            </div>
        )
    }
}
