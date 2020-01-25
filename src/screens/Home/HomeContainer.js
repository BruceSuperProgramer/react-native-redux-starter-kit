import React, { Component } from 'react';
import HomeScreen from './HomeScreen';

class HomeContainer extends Component {
	render() {
		return <HomeScreen navigation={this.props.navigation} />;
	}
}

export default HomeContainer;
