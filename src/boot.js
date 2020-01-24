import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import App from './routers/App';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import { StyleProvider } from 'native-base';
import { View, Text } from 'react-native';

export default class Root extends Component {
	constructor(props) {
		super(props);
		const { persistor, store } = configureStore();
		this.persistor = persistor;
		this.store = store;
	}
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Hello World</Text>
			</View>
			// <StyleProvider style={getTheme(material)}>
			// 	<Provider store={this.store}>
			// 		<PersistGate persistor={this.persistor}>
			// 			<App />
			// 		</PersistGate>
			// 	</Provider>
			// </StyleProvider>
		);
	}
}
