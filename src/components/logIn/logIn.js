import React, { Component } from 'react'
import './login.scss'
import { setAuthedUser } from '../../store/actions/authedUser'
import { connect } from 'react-redux'
import M from 'materialize-css';
import { formatUsername } from '../../utils/helpers'

class LogIn extends Component {

  componentDidMount() {
    M.AutoInit();
  }

  componentDidUpdate(prevProps) {
    if (this.props.users.length !== prevProps.users.length) {
      M.AutoInit();
    }
  }

  state = {
    selectedUser: ''
  }

  userLogin() {
    this.props.dispatch(setAuthedUser(this.state.selectedUser));
    this.props.history.push(`/`);
  }

  render() {
    return (
      <div className="login">
        <div className="custom__panel">
          <div className="custom__panel__header">
            <label className="custom__panel__header__label custom-label--large">Welcome to the Would you Rather App!</label>
            <label className="custom-label">Please sign in to continue</label>
          </div>
          <div className="custom__panel__container login__container">
            <div className="login__container__logo">
              <img src='/images/wouldyourather-banner.jpg' alt="wouldyourather-banner" />
            </div>
            <div className="login__container__content">
              <label className="login__container__content__label custom-label--medium">Sign in</label>
              <div className="login__container__content__dropdown">
                <select onChange={e => this.setState(
                  {
                    selectedUser: e.target.value
                  }
                )} value={this.state.selectedUser}>
                  <option value="" disabled>Choose your option</option>
                  {this.props.users.map((user, index) =>
                    <option key={index} value={user.id}>{formatUsername(user.name)}</option>
                  )}
                </select>
              </div>
              <button onClick={this.userLogin.bind(this)} className={`custom-button waves-effect waves-light btn login__container__content__button
                            ${this.state.selectedUser.length > 0 ? '' : 'disabled'}`}>Sign in</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = ({ users }) => {
  return {
    users: Object.keys(users).map(i => users[i])
  }
}

export default connect(mapStatetoProps)(LogIn)