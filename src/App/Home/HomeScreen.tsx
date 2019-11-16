import React, { useCallback } from 'react';
import { AsyncStorage, Button, StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function HomeScreen({ navigation }) {
  const signOutAsync = useCallback(async () => {
    await AsyncStorage.clear();
    navigation.navigate('Auth');
  }, []);

  return (
    <View style={styles.container}>
      <Text>HOME SCREEN</Text>
      <Button title="Sign out!" onPress={signOutAsync} />
    </View>
  );
};
