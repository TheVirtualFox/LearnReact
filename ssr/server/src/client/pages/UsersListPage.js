import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
import { Helmet } from "react-helmet";

class UsersListPage extends React.Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{ user.name }</li>
        });
    }

    head() {
        return (
            <Helmet>
                <title>Users App</title>
                <meta property="og:title" content="User App" />
            </Helmet>
        );
    }

    render() {
        return (

            <div>
                ${ this.head() }
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { users: state.users };
};

function loadData(store) {
    return store.dispatch(fetchUsers());
}

export { loadData };
export default {
    loadData,
    component: connect(mapStateToProps, { fetchUsers })(UsersListPage)
};
