import React, { useCallback } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const ResetPasswordScreen = ({ navigation }) => {
  const gotoSignIn = useCallback(() => {
    navigation.navigate('Login');
  }, []);

  return (
    <View style={styles.container}>
      <Text>NOT IMPLEMENTED YED</Text>
      <Button title="Go to Sign in!" onPress={gotoSignIn} />
    </View>
  );
};

ResetPasswordScreen.navigationOptions = {
  title: 'Reset Password',
};

export default ResetPasswordScreen;
