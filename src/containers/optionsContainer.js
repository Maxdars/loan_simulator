import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleProfileOption } from '../actions'

// Containers.
import Switch from '../components/switch';

class OptionsContainer extends Component {
  render() {
    return (
      <div className="options_container">
        <Switch 
            value = { parseInt(this.props.use_profiles) }
            onChange =  { this.props.toggleProfileOption }
        />
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

const mapDispatchToProps = dispatch => {
    return {
        toggleProfileOption: (value) => {
            dispatch(toggleProfileOption(value))
        },
    }}

export default connect(mapStateToProps, mapDispatchToProps)(OptionsContainer);