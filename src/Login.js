// Condtional Rendering
// Handling Events (onClick)

import React from 'react';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn : false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            isLoggedIn : !this.state.isLoggedIn
        })
    }

    render(){
        let loginButton;
        if(this.state.isLoggedIn === false){
            loginButton = <button onClick={this.handleClick}>Login</button>
        }
        else{
            loginButton = <button onClick={this.handleClick}>Logout</button>
        }

        return (
            loginButton
        )
    }
}

export default Login;