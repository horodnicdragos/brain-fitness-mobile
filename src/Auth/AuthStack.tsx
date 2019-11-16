import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './Login/LoginScreen';
import SignUpScreen from './SignUp/SignUpScreen';
import ResetPasswordScreen from './ResetPassword/ResetPasswordScreen';

export default createStackNavigator({
  Login: LoginScreen,
  SignUp: SignUpScreen,
  ResetPassword: ResetPasswordScreen,
});
