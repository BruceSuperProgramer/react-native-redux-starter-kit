import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import { userRequestLogout } from '../../actions/auth';
import { connect } from 'react-redux';

class HomeScreen extends React.Component {
	logout = () => {
		this.props.userRequestLogout();
		this.props.navigation.navigate('Loading');
	};

	render() {
		return (
			<View style={styles.container}>
				{this.props.isAuthenticated ? (
					<Button style={styles.loginBtn} onPress={this.logout}>
						<Text>Log out</Text>
					</Button>
				) : (
					<Text>Reducer not working</Text>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	loginBtn: {
		width: 80,
		height: 40,
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 10
	}
});

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.auth.isAuthenticated
	};
};

export default connect(mapStateToProps, {
	userRequestLogout
})(HomeScreen);
