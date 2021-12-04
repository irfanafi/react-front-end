import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import '../css/login.css'

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          username: null,
          password: null
        };
        this.handleChange = this.handleChange.bind(this);
      };

    handleUsernameChange = (e) =>{
        this.setState({username: e.target.value})
        console.log(this.state)
    }

    handlePasswordChange = (e) =>{
        this.setState({password: e.target.value})
    }

    checkInputs = () => {
        if(this.state.username.length > 0 & this.state.password.length > 0 ){
            console.log("Details are correct")
        }
        else{
            console.log("Either field is not filled")
        }
    }

    handleChange(e) {
        e.preventDefault();
        this.props.onPageChange();
      }

    render(){
        return(
            <div class="login-form">
                <form action="checkLoginDetails" method="post">
                    <div class="input-field">
                        <input type="text" name="username" id="username"
                            placeholder="Username" required />
                    </div>
                    <div class="input-field">
                        <input type="password" name="password" id="password"
                            placeholder="Password" required />
                    </div>
                    <div class="login-div">
                        <input class="login-button" type="submit" value="Login" />
                    </div>
                    <a href="#" class="forgot-link">Forgot password?</a>
                    <div class="forgot-password">
                        <a id="create-acc" href="register">Create New Account</a>
                    </div>
                </form>
		    </div>
        )
    }
}

ReactDOM.render(<Login />, document.getElementById('root'));

export default Login;