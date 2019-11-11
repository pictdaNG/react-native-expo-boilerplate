import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StatusBar } from 'react-native';
import  Home  from '../screens/Home/Home';
import  Login  from '../screens/Login/Login';


 const AuthStack = createStackNavigator({ 
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },

  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    },
  },
});



const AppSwitchNavigator = createSwitchNavigator({
    AuthLoading:Home,
    Auth:AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

export default createAppContainer(AppSwitchNavigator);


