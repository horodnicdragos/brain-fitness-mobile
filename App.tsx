import React from 'react';
import { StyleSheet, View, Platform, StatusBar } from 'react-native';

import AppContainer from './AppContainer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      <AppContainer />
    </View>
  );
}
