import './App.css';
import React, { Component } from 'react';
import { initState } from './actions';
import  { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


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

    // return (
    //   <div className="app-container">
    //     <section className="left_side_bar">
    //       <OptionsContainer />
    //       <RecapContainer />
    //     </section>
    //     < SimulatorContainer />
    //   </div>
    // );
    return (
      <Container className="app-container container w-100 h-80 border mt-4 mb-4 p-4 rounded shadow">
        <Row>
          <Col xs={12} md={4} lg={4} className="left_side_bar">
            <OptionsContainer />
            <RecapContainer />
          </Col>
          <Col xs={12} md={8} lg={8} className="simulator_container border shadow">
            <SimulatorContainer />
          </Col>
        </Row>
      </Container>
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