import React from 'react';
import { connect } from 'react-redux';
import LoadingScreen from './LoadingScreen';

class LoadingContainer extends React.Component {
	state = {
		updated: false
	};

	shouldComponentUpdate(nextProps, nextState) {
		console.log('shouldComponentUpdate');
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('componentDidUpdate');
	}

	navigateToApp = () => {
		this.setState({ updated: true });
		this.props.navigation.navigate('App');
	};

	componentDidMount() {
		this.props.isAuthenticated ? navigateToApp : null;
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
