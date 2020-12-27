import React, { Component } from 'react';
import Duration from '../components/duration';
import { connect } from 'react-redux';
import { changeDuration } from '../actions'

class DurationContainer extends Component {
    render() {
        return (
            <Duration 
                value = {this.props.duration}
                minValue = {this.props.min_duration}
                maxValue = {this.props.max_duration}
                step = {this.props.durationStep}
                changeDuration = {this.props.changeDuration}
            />
        )
    }
}

const mapStateToProps = reducers => {
    let state = reducers.simulator_reducers;
    return {
        duration: state.duration
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeDuration: (value) => {
            dispatch(changeDuration(value))
        },
    }}

export default connect(mapStateToProps, mapDispatchToProps)(DurationContainer);