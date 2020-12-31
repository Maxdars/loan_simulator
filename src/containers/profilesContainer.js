import React, { Component } from 'react';
import Profiles from '../components/profiles';
import { connect } from 'react-redux';
import { changeProfile } from '../actions'

class ProfilesContainer extends Component {
    render() {
        return (
            <Profiles
                value = {this.props.profile}
                options = {this.props.profiles}
                changeProfile = {this.props.changeProfile}
            />
        )
    }
}

const mapStateToProps = reducers => {
    let state = reducers.simulator_reducers;
    return {
        profile: state.profile,
        profiles: state.profiles
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeProfile: (value) => {
            dispatch(changeProfile(value))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilesContainer);