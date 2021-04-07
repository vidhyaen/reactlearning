import React,{ Component } from 'react'
// statefullclass

class Hi extends Component {
    render(){
        return <h1>Class components {this.props.name}</h1>
    }
}

export default Hi