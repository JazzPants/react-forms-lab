import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) { //take in props from App.js, so we can manipulate maxChars property
    super();

    this.state = {
      tweet: "",
      lengthRemaining: props.maxChars
    };
  }

  handleChange = (event) => {
    this.setState({
      tweet: event.target.value,
      lengthRemaining: this.props.maxChars - event.target.value.length //decrement
    })
  }
  handlePrint = () => {
    console.log(this.state.tweet)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={(event) => this.handleChange(event)} value={this.state.tweet}/>
        <p>length remaining: {this.state.lengthRemaining}</p>
        <p>Your message: {this.state.tweet}</p>
        <button onClick={this.handlePrint}>Print message to console</button>
      </div>
    );
  }
}

export default TwitterMessage;
