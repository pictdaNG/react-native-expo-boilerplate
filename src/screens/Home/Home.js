'use strict';
import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import {DisplayText, SubmitButton, Alert, SingleButtonAlert} from '../../components';
import styles from './styles';


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state ={
      showAlert : false,
      showAlert2 : false,
    }

    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleForgetPassword = this.handleForgetPassword.bind(this);
    this.handleCloseNotification = this.handleCloseNotification.bind(this);
    this.handleShowAlert = this.handleShowAlert.bind(this);

  }


  handleLogin = () => {
    return this.props.navigation.navigate('Login');
  };

  handleForgetPassword = () => {
    return this.props.navigation.navigate('ForgetPassword');
  };

  handleRegister = () => {
    return this.props.navigation.navigate('Register');
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
          onPress = {this.handleForgetPassword}
        />

        <SubmitButton
          title={'Login'}
          disabled={false}
          onPress={this.handleLogin}
        />

        <DisplayText
          text={'Register'}
          style={StyleSheet.flatten(styles.text)}
          onPress = {this.handleRegister}
        />


         <DisplayText
          text={'Show Alert'}
          style={StyleSheet.flatten(styles.text)}
          onPress = {this.handleShowAlert}
        />


         <DisplayText
          text={'Single Button Alert'}
          style={StyleSheet.flatten(styles.text)}
          onPress = {this.handleShowAlert2}
        />


        <Alert
          title = {'Alert'}
          message = {'Hello, I\'m working as expected'}
          handleCloseNotification = {this.handleCloseNotification}
          visible = {showAlert}
          positiveButton = {'OK'}
          negetiveButton= {'Cancel'}
        />  


        <SingleButtonAlert
          title = {'Single Button Alert'}
          message = {'Hello, I\'m working as expected'}
          handleCloseNotification = {this.handleCloseNotification}
          visible = {showAlert2}
          positiveButton = {'OK'}
        />  

     </View>
   )
   
  }
  
} 


