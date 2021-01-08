import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleProfileOption, toggleOpenOption } from '../actions'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


// Containers.
import Switch from '../components/switch';

class OptionsContainer extends Component {
  render() {
    return (
      <Container className="options_container border shadow rounded mb-auto">
        <Row className="options_row">
          <Col>
            <Switch 
                label = 'Show profiles'
                value = { parseInt(this.props.use_profiles) }
                onChange =  { this.props.toggleProfileOption }
            />
          </Col>
        </Row>
        <Row className="options_row">
          <Col>
            <Switch 
                label = 'Show fixed choices'
                value = { !parseInt(this.props.open_simulator) }
                onChange =  { this.props.toggleOpenOption }
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = reducers => {
    let state = reducers.simulator_reducers;
    return {
        use_profiles: state.use_profiles,
        open_simulator: state.open_simulator
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleProfileOption: (value) => {
            dispatch(toggleProfileOption(value))
        },
        toggleOpenOption: (value) => {
          dispatch(toggleOpenOption(value))
      }
    }}

export default connect(mapStateToProps, mapDispatchToProps)(OptionsContainer);