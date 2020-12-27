import './App.css';
import  { connect } from 'react-redux'
import React, { Component } from 'react';
import { initState } from './actions';

// Containers.
import AmountContainer from './containers/amountContainer';
import DurationContainer from './containers/durationContainer';
import MonthlyContainer from './containers/monthlyContainer';
import Switch from './components/switch';

class App extends Component {

  componentWillMount() {
      this.props.initState();
  }

  render() {
    return (
      <div className="App">
        <AmountContainer />
        <DurationContainer />
        <MonthlyContainer />
        {/* <Switch /> */}
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => {
  return {
    initState: () => {
      dispatch(initState())
    },
  }}

export default connect(null, mapDispatchToProps)(App);