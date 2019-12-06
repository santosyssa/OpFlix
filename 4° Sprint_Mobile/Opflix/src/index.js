import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import MainScreen from './pages/main';
import LoginScreen from './pages/login';
import CategoriaScreen from './pages/categorias';

const AuthStack = createStackNavigator({
    Login: { screen: LoginScreen },
});

const MainNavigation = createBottomTabNavigator({
    Main: {
        screen: MainScreen,
    },

    Categorias: {
        screen: CategoriaScreen
    }
}, {

    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        inactiveBackgroundColor:'#3C3B3B',
        activeBackgroundColor: '#707070',
        textcolor: "white",

        style: {
          width: '100%',
          height: 40,
          
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