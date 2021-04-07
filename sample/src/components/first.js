import React, { Component } from 'react'
//import { Link } from 'react-router-dom'

export default class first extends Component {

    constructor(props){
        super(props)
            this.state={
                name:'',
                number:''
            }
        }
        
        onChangeName(e){
            this.setState({
                name:e.target.value
            })
        }
        onChangeNumber(n)
        {
            this.setState({
                number:n.target.value
            })
        }

        onSubmit(e){
        e.preventDefault()
            console.log(this.state.name)
            console.log(this.state.number)
        }
        
        componentDidMount(e){

        }
        componentWillMount(e){
            
        }

    render() {
        return (
            <div>
                <label>Name</label><br/>
                <form onSubmit={this.onSubmit.bind(this)} className="padding">
                    <input type="text" className="form-control col-md-6 padding" onChange={this.onChangeName.bind(this)} value={this.state.name}/><br/><br/>
                    <input type="text" className="form-control"  onChange={this.onChangeNumber.bind(this)} value={this.state.number}/><br/><br/>
                    <button type="submit">Submit</button>
                </form>
                
            </div>
        )
    }
}


