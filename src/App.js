import './App.css';
import React, { Component } from 'react';
import { initState } from './actions';
import  { connect } from 'react-redux'

// Containers.
import SimulatorContainer from './containers/simulatorContainer';
import RecapContainer from './containers/recapContainer';

class App extends Component {

  UNSAFE_componentWillMount() {
    this.props.initState({
      'amount': this.props.amount,
      'duration': this.props.duration,
      'interest': this.props.interest
    });
  }

  render() {
    return (
      <div className="App-container">
        <SimulatorContainer {...this.props} />
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