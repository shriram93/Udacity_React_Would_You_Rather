import React from 'react'
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux'

const PrivateRoute = ({ authedUser, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authedUser ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
    }
  />
)

const mapStatetoProps = ({ authedUser }) => {
  return {
    authedUser
  }
}

export default connect(mapStatetoProps)(PrivateRoute)