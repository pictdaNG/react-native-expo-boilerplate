'use strict';
import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import {DisplayText, SubmitButton} from '../../components';
import styles from './styles';


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state ={
      showAlert : false,
      showAlert2 : false,
    }

  }


  handleLogin = () => {
    return this.props.navigation.navigate('Login');
  };

  
  handleCloseNotification = () => {
    return this.setState({
       showAlert : false,
       showAlert2 : false,
     });
   }

   handleShowAlert = () =>{
     return this.setState({
       showAlert : true,
     });
   }
   
   handleShowAlert2 = () =>{
    return this.setState({
      showAlert2 : true,
    });
  }
  
  render () {
    const {showAlert, showAlert2} = this.state;
   return(
     <View style={styles.container}>  
      
        <DisplayText
          text={'ForgetPassword'}
          style={StyleSheet.flatten(styles.text)}
          onPress = {this.handleLogin}
        />

        <SubmitButton
          title={'Login'}
          disabled={false}
          onPress={this.handleLogin}
        />

        <DisplayText
          text={'Register'}
          style={StyleSheet.flatten(styles.text)}
          onPress = {this.handleLogin}
        />


         <DisplayText
          text={'Show Alert'}
          style={StyleSheet.flatten(styles.text)}
          onPress = {this.handleLogin}
        />


         <DisplayText
          text={'Single Button Alert'}
          style={StyleSheet.flatten(styles.text)}
          onPress = {this.handleShowAlert2}
        />
     </View>
   )
   
  }
  
} 


