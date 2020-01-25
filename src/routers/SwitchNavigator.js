import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import App from './AppNavigator';
import Loading from '../screens/Loading';

export default createAppContainer(
	createSwitchNavigator(
		{
			Loading: Loading,
			App: App
		},
		{
			initialRouteName: 'Loading'
		}
	)
);
