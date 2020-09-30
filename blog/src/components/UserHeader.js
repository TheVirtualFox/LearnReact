import React from "react";
import {connect} from "react-redux";

class UserHeader extends React.Component {

    render() {
        const user = this.props.user;
        if (!user) {
            return <div>loading...</div>;
        }
        return (
            <div className="header">{ user.name }</div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => ownProps.userId === user.id) };
};

export default connect(mapStateToProps)(UserHeader);