import React, { Component } from "react";
import { connect } from "react-redux";
import { fechAdmins } from "../actions/index";
import requireAuth from "../components/hocs/requireAuth";

class AdminsListPage extends Component {
  componentDidMount() {
    this.props.fechAdmins();
  }

  renderAdmins() {
    return this.props.admins.map(admin => {
      return <li key={admin.id}>{admin.name}</li>;
    });
  }

  render() {
    return (
      <div>
        <h3>Protected list of admins</h3>
        <ul>{this.renderAdmins()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ admins }) {
  return { admins };
}

export default {
  component: connect(mapStateToProps, { fechAdmins })(
    requireAuth(AdminsListPage)
  ),
  loadData: ({ dispatch }) => dispatch(fechAdmins())
};
