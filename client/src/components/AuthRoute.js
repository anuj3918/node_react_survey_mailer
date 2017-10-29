import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const AuthRoute = ({ component: Component, isLoggedIn, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			isLoggedIn === true ? (
				<Component {...props} />
			) : (
				<Redirect to={{ pathname: '/' }} />
			)}
	/>
);

function mapStateToProps(state) {
	return {
		isLoggedIn: state.auth ? true : false
	};
}

export default withRouter(connect(mapStateToProps, null)(AuthRoute));
