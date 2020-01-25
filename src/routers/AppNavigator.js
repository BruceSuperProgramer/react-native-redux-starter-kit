import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';

export default createStackNavigator(
	{
		Home: { screen: Home }
	},
	{
		initialRouteName: 'Home',
		headerMode: 'none'
	}
);
