import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

// Containers.
import AmountContainer from './amountContainer';
import DurationContainer from './durationContainer';
import MonthlyContainer from './monthlyContainer';
import InterestContainer from './interestContainer';
import ProfilesContainer from './profilesContainer';

class SimulatorContainer extends Component {
  render() {
    return (
      <Container className="fields_container">
        { this.props.use_profiles ? <Row><ProfilesContainer /></Row> : '' }
        <Row><AmountContainer /></Row>
        <Row><DurationContainer /></Row>
        <Row><InterestContainer /></Row>
        <Row><MonthlyContainer /></Row>
      </Container>
    );
  }

}

const mapStateToProps = reducers => {
  let state = reducers.simulator_reducers;
  return {
    use_profiles: state.use_profiles
  }
}

export default connect(mapStateToProps, null)(SimulatorContainer);