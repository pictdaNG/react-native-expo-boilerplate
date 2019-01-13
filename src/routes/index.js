import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import { StatusBar } from 'react-native';
import  Home  from '../screens/Home/Home';
import  Login  from '../screens/Login/Login';
import  Register  from '../screens/Register/Register';
import ForgetPassword from '../screens/ForgetPassword/ForgetPassword';


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

  Register: {
    screen: Register,
     navigationOptions : {
       header: null
     }
  },

  ForgetPassword: {
   screen: ForgetPassword,
    navigationOptions: {
     header: null
    }
  },

});



export default createSwitchNavigator({
    AuthLoading:Home,
    Auth:AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

