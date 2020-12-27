import React, { Component } from 'react';
import Monthly from '../components/monthly';
import { connect } from 'react-redux';
import { changeMonthly } from '../actions'

class MonthlyContainer extends Component {
    render() {
        return (
            <Monthly 
                value = {this.props.monthly}
                minValue = {this.props.min_monthly}
                maxValue = {this.props.max_monthly}
                step = {this.props.monthlyStep}
                changeMonthly = {this.props.changeMonthly}
            />
        )
    }
}

const mapStateToProps = reducers => {
    let state = reducers.simulator_reducers;
    return {
        monthly: state.monthly
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeMonthly: (value) => {
            dispatch(changeMonthly(value))
        },
    }}

export default connect(mapStateToProps, mapDispatchToProps)(MonthlyContainer);