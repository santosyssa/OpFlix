import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import MainScreen from './pages/main';

 const MainNavigator = createBottomTabNavigator(
    {
        Main: {
            screen: MainScreen
        },
        
    }
);

export default createAppContainer(MainNavigator)