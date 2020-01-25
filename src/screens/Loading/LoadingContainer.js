import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingScreen from './LoadingScreen';

class LoadingContainer extends Component {
	state = {
		updated: false
	};

	componentDidMount() {
		this.props.isAuthenticated ? this.props.navigation.navigate('App') : null;
	}

	render() {
		return <LoadingScreen navigation={this.props.navigation} />;
	}
}

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.auth.isAuthenticated
	};
};

export default connect(mapStateToProps)(LoadingContainer);
