import React, { useCallback } from 'react';
import { AsyncStorage, Text, View, Button, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const LoginScreen = ({ navigation }) => {
  const signInAsync = useCallback(async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    navigation.navigate('App');
  }, []);

  const gotoSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, []);

  const gotoResetPassword = useCallback(() => {
    navigation.navigate('ResetPassword');
  }, []);

  return (
    <View style={styles.container}>
      <Text>LOGIN SCREEN</Text>
      <Button title="Sign in!" onPress={signInAsync} />
      <Button title="Reset Password" onPress={gotoResetPassword} />
      <Text>No account?</Text>
      <Button title="Sign up" onPress={gotoSignUp} />
    </View>
  );
};

LoginScreen.navigationOptions = {
  title: 'Please sign in',
};

export default LoginScreen;
