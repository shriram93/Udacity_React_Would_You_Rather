import React, { Component } from 'react'
import './login.scss'
import M from 'materialize-css';

class LogIn extends Component {
    componentDidMount() {
        M.AutoInit();
    }

    render() {
        return (
            <div className="login">
                <div className="card-panel login__container">
                    <div className="login__container__header">
                        <h5>Welcome to the Would you Rather App!</h5>
                        <p>Please sign in to continue</p>
                    </div>
                    <div className="login__container__body">
                        <div className="log-in__container__body__logo">

                        </div>
                        <div className="login__container__body__content">
                        <label class="input-field login__container__body__content__label">Sign in</label>
                            <div class="input-field login__container__body__content__dropdown">
                                <select>
                                    <option value="" disabled selected>Choose your option</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LogIn