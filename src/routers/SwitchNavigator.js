import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import App from './AppNavigator';
import Loading from '../containers/LoadingContainer';
import Login from '../containers/LoginContainer';

export default createAppContainer(
	createSwitchNavigator(
		{
			Loading: Loading,
			App: App,
			Login: Login
		},
		{
			initialRouteName: 'Loading'
		}
	)
);
