import React from 'react';
import UserList from "../containers/user-list";
import UserDetails from "../containers/user-details";
require('../../scss/style.scss');

const App = () => {
    return (
        <div>
            <h2>Username List:</h2>
            <UserList />
            <hr />
            <h2>User Details:</h2>
            <UserDetails />
        </div>
    );
};

export default App;