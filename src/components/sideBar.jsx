import React, { Component } from "react";
import { connect } from "react-redux";
import { changeUser } from "../store/actions/usuarios-actions";

export class SideBar extends Component {
  render() {
    return (
      <ul>
        {this.props.usuarios.list.map((user, index) => (
          <li key={index}>
            {user}{" "}
            <button onClick={() => this.props.changeUser(user)}>
              Selecionar
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  usuarios: state.usuariosReducer,
});

const mapDispatchToProps = (dispatch) => ({
  changeUser: (user) => dispatch(changeUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
