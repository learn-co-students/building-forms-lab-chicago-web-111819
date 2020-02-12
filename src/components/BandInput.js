
import React, { Component } from 'react';

class BandInput extends Component {

  state = {
    name: ''
  }

  updateBand = event => {
    this.setState({
      name: event.target.value
    });
  }

  storeBand = event => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({name: ''});
  }

  render() {
    return(
      <div>
        <form onSubmit={e => this.storeBand(e)}>
          <label htmlFor="band-name">Band name&nbsp;</label>
          <input
            id="band-name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => this.updateBand(e)}
            />&nbsp;
          <input type="submit" value="Add Band" />
        </form>
      </div>
    )
  }
}

export default BandInput;

