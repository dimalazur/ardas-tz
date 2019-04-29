import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, filmDetail, ...rest}) => (
  <Route
    {...rest}
    render={props => (
      filmDetail
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/' }} />
    )}
  />
);

const mapStateToProps = (state) => {
  return {
    filmDetail: state.filmsStore.filmDetail
  }
}

const PrivateRouteConnect = connect(
  mapStateToProps,
  null
)(PrivateRoute);
export default PrivateRouteConnect;