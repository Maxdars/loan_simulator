import React, { Component } from 'react';
import RecapElement from '../components/recapElement';
import { connect } from 'react-redux';

class RecapContainer extends Component {
    render() {
        return (
            <div>
                <RecapElement 
                    label = 'Amount'
                    value = {this.props.amount}
                />
                <RecapElement 
                    label = 'Duration in months'
                    value = {this.props.duration}
                />
                <RecapElement 
                    label = 'Interest'
                    value = {` ${(this.props.interest * 100).toFixed(0)} %`}
                />
                <RecapElement 
                    label = 'Monthly Payment'
                    value = {this.props.monthly}
                />
            </div>
        )
    }
}

const mapStateToProps = reducers => {
    let state = reducers.simulator_reducers;
    return {
        amount: state.amount,
        duration: state.duration,
        monthly: state.monthly,
        interest: state.interest,
    }
}

export default connect(mapStateToProps,null)(RecapContainer);