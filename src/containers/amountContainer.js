import React, { Component } from 'react';
import Amount from '../components/amount';
import { connect } from 'react-redux';
import { changeAmount, changeOpenAmount } from '../actions'

class AmountContainer extends Component {
    render() {
        return (
            <Amount 
                value = {this.props.amount}
                minValue = {this.props.min_amount}
                maxValue = {this.props.max_amount}
                step = {this.props.amountStep}
                changeAmount = {this.props.changeAmount}
                changeOpenAmount = {this.props.changeOpenAmount}
                open_simulator = {this.props.open_simulator}
                fixed_amounts = {this.props.fixed_amounts}
            />
        )
    }
}

const mapStateToProps = reducers => {
    let state = reducers.simulator_reducers;    

    return {
        amount: state.amount,
        min_amount: state.min_amount,
        max_amount: state.max_amount,
        amount_step: state.amount_step,
        open_simulator: state.open_simulator,
        fixed_amounts: state.fixed_amounts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeAmount: (value) => {
            dispatch(changeAmount(value))
        },
        changeOpenAmount: (value) => {
            dispatch(changeOpenAmount(value))
        }
    }}

export default connect(mapStateToProps, mapDispatchToProps)(AmountContainer);