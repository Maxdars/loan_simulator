import React, { Component } from 'react';
import Amount from '../components/amount';
import { connect } from 'react-redux';
import { changeAmount } from '../actions'

class AmountContainer extends Component {
    render() {
        return (
            <Amount 
                value = {this.props.amount}
                minValue = {this.props.min_amount}
                maxValue = {this.props.max_amount}
                step = {this.props.amountStep}
                changeAmount = {this.props.changeAmount}
            />
        )
    }
}

const mapStateToProps = reducers => {
    let state = reducers.simulator_reducers;
    return {
        amount: state.amount
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeAmount: (value) => {
            dispatch(changeAmount(value))
        },
    }}

export default connect(mapStateToProps, mapDispatchToProps)(AmountContainer);