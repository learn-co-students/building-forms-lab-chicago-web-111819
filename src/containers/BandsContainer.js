import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBand } from '../actions/bands';
import BandInput from '../components/BandInput';

const RenderBands = props => {
  return (
    <div>
      {props.bands.length > 0 ? <hr /> : null}
      {props.bands.map((band, i) =>
      (<li key={i}>{band.name}</li>)) }
    </div>)
};

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <p>The Big Bands in Town</p>
        <hr />
        <BandInput addBand={this.props.addBand}/>
        <RenderBands bands={this.props.bands} />
      </div>
    )
  }
}

export default connect(state => ({ bands: state.bands }), { addBand })(BandsContainer);

