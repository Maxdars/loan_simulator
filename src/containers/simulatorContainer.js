import React, { Component } from 'react';
import { connect } from 'react-redux';

// Containers.
import AmountContainer from './amountContainer';
import DurationContainer from './durationContainer';
import MonthlyContainer from './monthlyContainer';
import InterestContainer from './interestContainer';
import ProfilesContainer from './profilesContainer';

class SimulatorContainer extends Component {
  render() {
    return (
      <div className="simulator_container">
        { this.props.use_profiles ? <ProfilesContainer /> : '' }
        <AmountContainer />
        <DurationContainer />
        <InterestContainer />
        <MonthlyContainer />
      </div>
    );
  }

}

const mapStateToProps = reducers => {
  let state = reducers.options_reducers;
  return {
    use_profiles: state.use_profiles
  }
}

export default connect(mapStateToProps, null)(SimulatorContainer);