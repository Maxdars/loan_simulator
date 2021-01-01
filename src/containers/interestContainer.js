import React, { Component } from 'react';
import Interest from '../components/interest';
import { connect } from 'react-redux';
import { changeInterest, changeOpenInterest } from '../actions'

class InterestContainer extends Component {
    render() {
        return (
            <Interest 
                value = {this.props.interest}
                minValue = {this.props.min_interest}
                maxValue = {this.props.max_interest}
                step = {this.props.interest_step}
                changeInterest = {this.props.changeInterest}
                changeOpenInterest = {this.props.changeOpenInterest}
                open_simulator = {this.props.open_simulator}
                fixed_interests = {this.props.fixed_interests}
            />
        )
    }
}

const mapStateToProps = reducers => {
    let state = reducers.simulator_reducers;
    return {
        interest: state.interest,
        min_interest: state.min_interest,
        max_interest: state.max_interest,
        interest_step: state.interest_step,
        open_simulator: state.open_simulator,
        fixed_interests: state.fixed_interests
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeInterest: (value) => {
            dispatch(changeInterest(value))
        },
        changeOpenInterest: (value) => {
            dispatch(changeOpenInterest(value))
        }
    }}

export default connect(mapStateToProps, mapDispatchToProps)(InterestContainer);