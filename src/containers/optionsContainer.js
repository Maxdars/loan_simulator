import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleProfileOption, toggleOpenOption } from '../actions'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'


// Containers.
import Switch from '../components/switch';

class OptionsContainer extends Component {
  render() {
    faQuestionCircle.prefix = 'far';

    return (
      <Container className="options_container border shadow rounded mb-auto">
        {/* <Row className="recap_row border-bottom bg-primary rounded-top">
            <Col className="d-flex justify-content-center font-weight-bold recap-header"> Recap </Col>
        </Row> */}
        <Row className="options_row">
          <Col className="col-8">
            <Switch 
                label = 'Profiles mode'
                value = { parseInt(this.props.use_profiles) }
                onChange =  { this.props.toggleProfileOption }
            />
          </Col>
          <Col className="d-flex justify-content-end">
            <OverlayTrigger
              placement='top'
              overlay={
                <Tooltip id={'tooltip-top'}>
                  <small>
                    Enables profile mode. 
                    A select field will be added to the top of the simulator.
                    Each profile defines the min and max range of the range inputs.
                  </small>
                </Tooltip>
              }
            >
              <div className="text-primary">
                <FontAwesomeIcon  icon={faQuestionCircle} className="fa-sm"/>
              </div>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row className="options_row">
          <Col>
            <Switch 
                label = 'Fixed mode'
                value = { !parseInt(this.props.open_simulator) }
                onChange =  { this.props.toggleOpenOption }
            />
          </Col>
          <Col className="d-flex justify-content-end">
          <OverlayTrigger
              placement='top'
              overlay={
                <Tooltip id={'tooltip-top'}>
                  <small>
                    Enables fixed choices mode. 
                    The range inputs will be replaced by a list of radios.
                  </small>                </Tooltip>
              }
            >
              <div className="text-primary">
                <FontAwesomeIcon  icon={faQuestionCircle} className="fa-sm"/>
              </div>
            </OverlayTrigger>
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