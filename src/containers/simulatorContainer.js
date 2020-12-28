import  { connect } from 'react-redux'
import React, { Component } from 'react';
import { initState } from '..//actions';

// Containers.
import AmountContainer from './amountContainer';
import DurationContainer from './durationContainer';
import MonthlyContainer from './monthlyContainer';
import InterestContainer from './interestContainer';

class SimulatorContainer extends Component {
  render() {
    return (
      <div className="simulator_container">
        <AmountContainer />
        <DurationContainer />
        <InterestContainer />
        <MonthlyContainer />
      </div>
    );
  }

}

export default SimulatorContainer;