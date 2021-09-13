import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import AuthLoading from './AuthLoading';

export default function withAuthorizationRouter(Component) {
  class AuthenticatedComponent extends React.Component {
    render() {
      // alert(this.props.uid);
      const { isAuthenticated } = this.props;
      const { user } = this.props;
      const redirectAfterLogin = this.props.location.pathname; // eslint-disable-line
      const authenticating = (isAuth, user) => {
        // Check authentication
        // if (isAuth === null || user === null) { //else just spins indefinitely - set in saga
        if (isAuth === null) {
          return (<AuthLoading />);
        }
        // Is not authenticate
        if (isAuth === false) {
          return (<Redirect to={`/login-firebase?next=${redirectAfterLogin}`} />);
        }
        // Is authenticate
        return (
          <Component {...this.props} />
        );
      };

      return (
        <div>
          {authenticating(isAuthenticated,user)}
        </div>
      );
    }
  }

  AuthenticatedComponent.propTypes = {
    isAuthenticated: PropTypes.bool,
    user: PropTypes.object
  };

  AuthenticatedComponent.defaultProps = {
    isAuthenticated: null,
    user: null
  };

  const reducer = 'authReducer';
  const mapStateToProps = (state) => ({
    isAuthenticated: state.get(reducer).loggedIn,
    user: state.get(reducer).user,
    ...state
  });

  return connect(mapStateToProps)(AuthenticatedComponent);
}
