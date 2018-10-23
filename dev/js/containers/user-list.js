import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectUser } from "../actions/index";

class UserList extends Component {

    createListItems() {
        return this.props.users.map((user) => {
            return (
                <li 
                    key={user.id} 
                    onClick={() => this.props.selectUser(user)}>
                    {user.firstname} {user.lastname} 
                </li>
            )
        })
    }

    render() {
        return (
            <ul>
                {this.createListItems()}
            </ul>
        );
    }
}

// Why state to props : 
function mapStateToProps(state) {
    return {
        users: state.users // because we need only usersList from that big javscript object (our application state/data)
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectUser
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);