import React, { Component } from 'react'
class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comment:'',
             topic:'react'
        }
    }
    handlerUsernameChange =(event) =>{
        this.setState(
            {
                username:event.target.value
            }
        )
    }
    handlerComment=(event) =>{
        this.setState(
            {
                comment:event.target.value
            }
        )
    }
    handlerSelect =(event) =>{
        this.setState(
            {
                topic:event.target.value
            }
        )
    }
    handlersubmit =(event) =>{
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault()
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handlersubmit}>
                    <div>
                    <h1 className="text-danger">Login form</h1><br></br>
                    <label className="p-2">Username</label>
                    <input type="text" value={this.state.username} onChange={this.handlerUsernameChange} className="form-control p-2"/>
                   
                    </div>
                 <div>
                     <label>Comments</label><br></br>
                     <textarea value={this.state.comment} onChange={this.handlerComment} className="form-control p-2"></textarea>
                 </div>
                 <div>
                     <label>Framework</label><br></br>
                     <select value={this.state.topic} onChange={this.handlerSelect} className="form-control p-2">
                         <option value="react">React</option>
                         <option value="vue">Vue</option>
                         <option value="angular">Angular</option>
                     </select>
                 </div><br></br>
                 <button>Submit</button>
                </form>
                
            </div>
        )
    }
}
export default Form