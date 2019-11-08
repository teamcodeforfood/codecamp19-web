import React, { useEffect } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

export default function(ComposedComponent) {
  const Authenticate = props => {
    const _isAuthenticated = () => {
      const token = localStorage.getItem("token");
      return Boolean(token);

      // TODO: we need to verify the token
    };

    useEffect(() => {
      const _checkAndRedirect = () => {
        const { redirect } = props;
        const isAuthenticated = _isAuthenticated();

        if (!isAuthenticated) {
          redirect();
        }
      };

      _checkAndRedirect();
    }, [props]);

    const isAuthenticated = _isAuthenticated();

    return (
      <div>{isAuthenticated ? <ComposedComponent {...props} /> : null}</div>
    );
  };

  const mapDispatchToProps = dispatch => {
    return {
      redirect: () => dispatch(push("/auth/login"))
    };
  };

  return connect(
    null,
    mapDispatchToProps
  )(Authenticate);
}
