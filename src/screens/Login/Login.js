'use strict';

import React, {Component} from 'react';
import { View , StyleSheet} from 'react-native';
import {DisplayText} from '../../components';
import colors from '../../assets/colors';
import styles from './styles';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

  componentWillMount () {
  }
  

  render () {
   return(
     <View style={styles.container}> 
      <DisplayText
        text={'Hello from Login...'}
        style={StyleSheet.flatten(styles.text)}
        onPress={()=>this.props.navigation.goBack()}
      />
     </View>
   )
   
  }
  
} 

export default Login;