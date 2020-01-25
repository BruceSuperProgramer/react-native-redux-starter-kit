import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import { userLoginSuccess } from '../../actions/auth';
import { connect } from 'react-redux';

class LoadingScreen extends React.Component {
	login = () => {
		this.props.userLoginSuccess();
		this.props.navigation.navigate('Home');
	};

	render() {
		return (
			<View style={styles.container}>
				<Button style={styles.loginBtn} onPress={this.login}>
					<Text>Login</Text>
				</Button>
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
		width: 60,
		height: 40,
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 10
	}
});

export default connect(null, {
	userLoginSuccess
})(LoadingScreen);
