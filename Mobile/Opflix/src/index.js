import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import MainScreen from './pages/main';
import LoginScreen from './pages/login';

const AuthStack = createStackNavigator({
    Login: { screen: LoginScreen },
});

const MainNavigation = createBottomTabNavigator({
    Main: {
        screen: MainScreen,
    }
}, {

    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        inactiveBackgroundColor: '#2493BF',
        activeBackgroundColor: '#2493BF',
        style: {
          width: '100%',
          height: 50,
        },
      },
    }

);

export default createAppContainer(
    createSwitchNavigator(
        {
            MainNavigation,
            AuthStack
        },
        {
            initialRouteName: "AuthStack"
        },
    )
)