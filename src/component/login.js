import React, { Component } from 'react';
import './style.css'
class Login extends Component {
    constructor(props){
        super(props)
 this.state = {
        username:'',
        Password:''
      }
      this.handleClick = this.handleClick.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    
    }
    handleClick(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event){
        const { Password, username } = this.state;
        if (username ==="" && Password === "") {
          alert(" username andPasswords not matching");
        } else {
          alert("Login Successful");
        }
        event.preventDefault();

    }
    
  

    render() { 
        return ( 
            <div>
               <form  className = "form">
                   <div className = "container">
               <label> UserName:
             <input
              type="text" 
              name ="username"
              value={this.state.username} 
              placeholder = "enter your username"
              onChange ={this.handleClick}/> 
             </label>
             <br></br>
             <label> Password:
                <input 
                type="password" 
                name ="Password"
                value ={this.state.Password}
                placeholder ="enter your password" 
                onChange = {this.handleClick}/>
                </label>
                </div>
                <button onClick={this.handleSubmit}>Submit</button>
              </form>
              
           </div>
         );
    }
}
 
export default Login;