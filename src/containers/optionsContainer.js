import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleProfileOption, toggleOpenOption } from '../actions'

// Containers.
import Switch from '../components/switch';

class OptionsContainer extends Component {
  render() {
    return (
      <div className="options_container">
        <Switch 
            label = 'Show profiles'
            value = { parseInt(this.props.use_profiles) }
            onChange =  { this.props.toggleProfileOption }
        />
        <Switch 
            label = 'Show fixed choices'
            value = { !parseInt(this.props.open_simulator) }
            onChange =  { this.props.toggleOpenOption }
        />
      </div>
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