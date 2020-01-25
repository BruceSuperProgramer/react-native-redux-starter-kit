import React from 'react';
import HomeScreen from './HomeScreen';

class HomeContainer extends React.Component {
	render() {
		return <HomeScreen navigation={this.props.navigation} />;
	}
}

export default HomeContainer;
