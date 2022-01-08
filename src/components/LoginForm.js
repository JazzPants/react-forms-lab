import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      error: ""
    };
  }

handleInputChange = (event) => {
  let name = event.target.name; //getting data from DOM input element, either element with name username or element with name password
  this.setState({
    [name]: event.target.value
  })
}

handleSubmit = (event) => {
  event.preventDefault();
  if(this.state.username.length > 0 && this.state.password.length > 0) {
    this.setState({ //reset error message if condition satisfied!
      error: ""
    }) 
    //call handleLogin callback function prop from App.js
    this.props.handleLogin({username: this.state.username, password: this.state.password}) //logs in with user affected state
  } //object needs to be key:value format! e.g. you can't just use this.state username, this.state.password
  else {
    this.setState({
      error: "You need to fill in username and password"
    })
  }
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>{this.state.error}</div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

//error message, div with no content if there is no login error!
export default LoginForm;
