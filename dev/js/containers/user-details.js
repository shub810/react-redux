import React, { Component } from 'react';
import { connect } from "react-redux";

class UserDetails extends Component {
    render() {
        if (!this.props.activeUser) {
            return (
                <h4>Select a user...</h4>
            )
        }
        return (
            <div>
                <h2>{this.props.activeUser.firstname} {this.props.activeUser.lastname}</h2>
                <h3>Descriptions : {this.props.activeUser.description}</h3>
                <h3>Age : {this.props.activeUser.age}</h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeUser: state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetails);