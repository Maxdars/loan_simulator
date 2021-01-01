import React, { Component } from 'react';
import Duration from '../components/duration';
import { connect } from 'react-redux';
import { changeDuration, changeOpenDuration } from '../actions'

class DurationContainer extends Component {
    render() {
        return (
            <Duration 
                value = {this.props.duration}
                minValue = {this.props.min_duration}
                maxValue = {this.props.max_duration}
                step = {this.props.durationStep}
                changeDuration = {this.props.changeDuration}
                changeOpenDuration = {this.props.changeOpenDuration}
                open_simulator = {this.props.open_simulator}
                fixed_durations = {this.props.fixed_durations}
            />
        )
    }
}

const mapStateToProps = reducers => {
    let state = reducers.simulator_reducers;

    return {
        duration: state.duration,
        min_duration: state.min_duration,
        max_duration: state.max_duration,
        duration_step: state.duration_step,
        open_simulator: state.open_simulator,
        fixed_durations: state.fixed_durations
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeDuration: (value) => {
            dispatch(changeDuration(value))
        },
        changeOpenDuration: (value) => {
            dispatch(changeOpenDuration(value))
        }
    }}

export default connect(mapStateToProps, mapDispatchToProps)(DurationContainer);