import React, { Component } from 'react';
import Loading from '../../components/Loading';
import { connect } from 'react-redux';

class LoadingContainer extends Component {
	componentDidMount() {
		this.props.navigation.navigate(this.props.auth.token ? 'Login' : 'Login');
	}
	render() {
		return <Loading navigation={this.props.navigation} />;
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps, null)(LoadingContainer);
