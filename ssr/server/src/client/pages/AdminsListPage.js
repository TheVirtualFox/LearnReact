import React from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../actions";
import requireAuth from "../components/hocs/requireAuth";

class AdminsListPage extends React.Component {

    componentDidMount() {
        this.props.fetchAdmins();
    }

    renderAdmins() {
        return this.props.admins.map(admin => {
            return <li key={admin.id}>{ admin.name }</li>
        });
    }

    render() {
        return (
            <div>
                <h2>Admins</h2>
                <ul>
                    {this.renderAdmins()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { admins: state.admins };
};

function loadData(store) {
    return store.dispatch(fetchAdmins());
}

export { loadData };
export default {
    loadData,
    component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminsListPage))
};
