import React, { Component } from 'react';
import RecapElement from '../components/recapElement';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class RecapContainer extends Component {
    render() {
        return (
            <Container className="recap_container border shadow rounded ">
                <Row className="recap_row border-bottom bg-primary">
                    <Col className="d-flex justify-content-center font-weight-bold recap-header"> Recap </Col>
                </Row>
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
            </Container>
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