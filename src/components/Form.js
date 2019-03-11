import React, { Component } from 'react';


class Form extends Component {
  render() {
    return (
      <div>
      <form autocomplete="off" onSubmit={this.props.getWeather}>
          <input type="text" name="city" placeholder="City"></input>
          <input type="text" name="country" placeholder="Country"></input>
          <button>Get Weather</button>
      </form>
      </div>
    );
  }
}

export default Form;

