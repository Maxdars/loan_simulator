import './App.css';
import React, { Component } from 'react';
import { initState } from './actions';
import  { connect } from 'react-redux'

// Containers.
import SimulatorContainer from './containers/simulatorContainer';
import OptionsContainer from './containers/optionsContainer';
import RecapContainer from './containers/recapContainer';

class App extends Component {

  render() {
    this.props.initState({
      'amount': this.props.amount,
      'duration': this.props.duration,
      'interest': this.props.interest
    });

    return (
      <div className="App-container">
        <OptionsContainer />
        <SimulatorContainer />
        <RecapContainer />
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => {
  return {
    initState: (data) => {
      dispatch(initState(data))
    },
  }}

export default connect(null, mapDispatchToProps)(App);